package mg.groupe26.avion;

import java.util.List;
import mg.groupe26.model.Assurance;
import mg.groupe26.model.Avion;
import mg.groupe26.model.Kilometrage;
import mg.groupe26.model.Personne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class AvionApplication {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(AvionApplication.class, args);
    }

    @GetMapping("/hello")
    @CrossOrigin
    public String hello() {
        return String.format("Hello World !");
    }

    // CRUD Avion
    @GetMapping("/avions")
    @CrossOrigin
    public List<Avion> findAvions() {
        String query = "select * from Avion";

        return jdbcTemplate.query(query,
                (rs, row) -> new Avion(rs.getInt("id"),
                        rs.getString("nom")));
    }

    @GetMapping("/avions/{id}")
    @CrossOrigin
    public Avion findAvion(@PathVariable int id) {
        Avion result = null;
        String query = "select * from Avion where id = " + id;

        result = jdbcTemplate.query(query,
                (rs, row) -> new Avion(rs.getInt("id"),
                        rs.getString("matriculation"))).get(0);

        return result;
    }

    // CRUD Kilometrage
    @GetMapping("/kilometrages/{idAvion}")
    @CrossOrigin
    public List<Kilometrage> getKilometrages(@PathVariable() int idAvion) {
        List<Kilometrage> result = null;
        String query = String.format("select * from Kilometrage where idAvion = " + idAvion);

        result = jdbcTemplate.query(query,
                (rs, row) -> new Kilometrage(rs.getInt("id"),
                        rs.getInt("idAvion"),
                        rs.getString("datetrajet"),
                        rs.getFloat("debutkm"),
                        rs.getFloat("finkm")));

        return result;
    }

    // login
    @GetMapping("/login")
    @CrossOrigin
    public Personne login(@RequestParam String email, @RequestParam String mdp) {
        Personne result = null;
        String query = "select * from Personne where email = '" + email + "' and mdp = '" + mdp + "' ";

        try {
            result = jdbcTemplate
                    .query(query,
                            (rs, row) -> new Personne(rs.getInt("id"),
                                    rs.getString("nom"),
                                    rs.getString("email"),
                                    rs.getString("mdp")))
                    .get(0);
        } catch (Exception e) {
        }

        // generate token
        if (result != null) {
            String token = result.generateToken();
            String queryToken = "insert into Token(idPersonne, valeur) values (" + result.getId() + ", '" + token
                    + "')";
            jdbcTemplate.batchUpdate(queryToken);

            result.setToken(token);
        }

        return result;
    }

    //    assurance
    @GetMapping("/moisAssurance/{nbMois}")
    @CrossOrigin
    public List<Avion> getMoisAssurance(@PathVariable Integer nbMois) {
        String query = "select * from v_AssuranceValid ";
        if (nbMois != null) {
            query += "where diff <= " + (nbMois * 30);
        }

        return null;
    }

    @GetMapping("/assurance/{idAvion}")
    @CrossOrigin
    public Assurance getAssurance(@PathVariable int idAvion) {
        Assurance result = null;
        String query = "select * from Assurance where idAvion = " + idAvion;

        result = jdbcTemplate.query(query,
                (rs, row) -> new Assurance(rs.getInt("id"),
                        rs.getInt("idAvion"),
                        rs.getString("dateassurance"),
                        rs.getString("dateexpiration"))).get(0);

        return result;
    }

}

//    @PostMapping("/addAvion")
//    public void addAvion(@RequestParam String nom) {
//        String query = String.format(
//                "insert into Avion(nom) values('%s')", nom);
//
//        jdbcTemplate.batchUpdate(query);
//    }
//
//    @DeleteMapping("/delAvion/{id}")
//    public void deleteAvion(@PathVariable int id) {
//        String query = String.format("delete from Avion where id=%s", id);
//
//        jdbcTemplate.batchUpdate(query);
//    }
//    @PostMapping("/kilometrage")
//    public void addKilometraage(@RequestParam(value = "idAvion") int idAvion,
//            @RequestParam(value = "dateTrajet") String dateTrajet, @RequestParam(value = "debutKm") Float debutKm,
//            @RequestParam(value = "finKm") Float finKm) {
//        String query = String.format(
//                "insert into Kilometrage(idAvion,dateTrajet,debutKm,finKm) values('%s','%s','%s','%s')", idAvion,
//                dateTrajet, debutKm, finKm);
//
//        jdbcTemplate.batchUpdate(query);
//    }
//
//    @DeleteMapping("/delKilometrage/{id}")
//    @ResponseBody
//    public void deleteKilometrage(@PathVariable int id) {
//        String query = String.format("delete from Kilometrage where id=%s", id);
//        jdbcTemplate.batchUpdate(query);
//    }
//    @GetMapping("/Avions/{id}")
//    @CrossOrigin
//    public List<v_Kilometrage> selectV_KilometrageById(@PathVariable int id) {
//        String query = String.format(
//                "select * from v_Kilometrage where id = %s", id);
//
//        return jdbcTemplate.query(query,
//                (rs, row) -> new v_Kilometrage(rs.getInt("id"), rs.getInt("idAvion"),
//                        rs.getString("dateTrajet"), rs.getFloat("debutKm"), rs.getFloat("finKm"),
//                        rs.getString("matriculation")));
//    }


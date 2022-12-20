package mg.groupe26.model;

import java.time.LocalDateTime;
import mg.groupe26.util.Utilities;

public class Personne {

    Integer id;
    String nom;
    String email;
    String mdp;

    String token;

    public Personne() {
    }

    public Personne(Integer id, String nom, String email, String mdp) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.mdp = mdp;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String generateToken() {
        String result = new String();

        LocalDateTime dateTime = LocalDateTime.now();
        result = Utilities.generateHash(dateTime + getEmail());
        System.out.println(dateTime);

        return result;
    }

}

package mg.groupe26.model;

public class Kilometrage {

    Integer id;
    Integer idAvion;
    String dateTrajet;
    Float debutKm;
    Float finKm;

    public Kilometrage() {
    }

    public Kilometrage(Integer id, Integer idAvion, String dateTrajet, Float debutKm, Float finKm) {
        this.id = id;
        this.idAvion = idAvion;
        this.dateTrajet = dateTrajet;
        this.debutKm = debutKm;
        this.finKm = finKm;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDateTrajet() {
        return dateTrajet;
    }

    public void setDateTrajet(String dateTrajet) {
        this.dateTrajet = dateTrajet;
    }

    public Float getDebutKm() {
        return debutKm;
    }

    public void setDebutKm(Float debutKm) {
        this.debutKm = debutKm;
    }

    public Float getFinKm() {
        return finKm;
    }

    public void setFinKm(Float finKm) {
        this.finKm = finKm;
    }

    public Integer getIdAvion() {
        return idAvion;
    }

    public void setIdAvion(Integer idAvion) {
        this.idAvion = idAvion;
    }

}

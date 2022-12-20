package mg.groupe26.model;

public class Assurance {

    Integer id;
    Integer idAvion;
    String dateAssurance;
    String dateExpiration;

    public Assurance() {
    }

    public Assurance(Integer id, Integer idAvion, String dateAssurance, String dateExpiration) {
        this.id = id;
        this.idAvion = idAvion;
        this.dateAssurance = dateAssurance;
        this.dateExpiration = dateExpiration;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdAvion() {
        return idAvion;
    }

    public String getDateAssurance() {
        return dateAssurance;
    }

    public void setDateAssurance(String dateAssurance) {
        this.dateAssurance = dateAssurance;
    }

    public void setIdAvion(Integer idAvion) {
        this.idAvion = idAvion;
    }

    public String getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(String dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

}

package mg.groupe26.model;

public class Entretien {

    Integer id;
    Integer idAvion;
    Integer idTypeEntretien;
    String dateEntretien;

    public Entretien() {
    }

    public Entretien(Integer id, Integer idAvion, Integer idTypeEntretien, String dateEntretien) {
        this.id = id;
        this.idAvion = idAvion;
        this.idTypeEntretien = idTypeEntretien;
        this.dateEntretien = dateEntretien;
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

    public void setIdAvion(Integer idAvion) {
        this.idAvion = idAvion;
    }

    public Integer getIdTypeEntretien() {
        return idTypeEntretien;
    }

    public void setIdTypeEntretien(Integer idTypeEntretien) {
        this.idTypeEntretien = idTypeEntretien;
    }

    public String getDateEntretien() {
        return dateEntretien;
    }

    public void setDateEntretien(String dateEntretien) {
        this.dateEntretien = dateEntretien;
    }

}

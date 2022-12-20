package mg.groupe26.model;

public class v_Entretien extends Entretien {

    String nom;

    public v_Entretien() {
    }

    public v_Entretien(String nom, Integer id, Integer idAvion, Integer idTypeEntretien, String dateEntretien) {
        super(id, idAvion, idTypeEntretien, dateEntretien);
        this.nom = nom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

}

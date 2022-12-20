package mg.groupe26.model;

public class v_AssuranceValid {

    int id;
    int idAvion;
    int diffJour;
    String nom;

    public v_AssuranceValid() {
    }

    public v_AssuranceValid(int id, int idAvion, int diffJour, String nom) {
        this.id = id;
        this.idAvion = idAvion;
        this.diffJour = diffJour;
        this.nom = nom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdAvion() {
        return idAvion;
    }

    public void setIdAvion(int idAvion) {
        this.idAvion = idAvion;
    }

    public int getDiffJour() {
        return diffJour;
    }

    public void setDiffJour(int diffJour) {
        this.diffJour = diffJour;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

}

package mg.groupe26.model;

public class TypeEntretien {

    int id;
    String nom;

    public TypeEntretien() {
    }

    public TypeEntretien(int id, String nom) {
        this.id = id;
        this.nom = nom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
}

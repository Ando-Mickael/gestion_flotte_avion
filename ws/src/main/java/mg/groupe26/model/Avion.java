package mg.groupe26.model;

public class Avion {

    int id;
    String nom;
    String img;

    public Avion() {
    }

    public Avion(int id, String nom, String img) {
        this.id = id;
        this.nom = nom;
        this.img = img;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

}

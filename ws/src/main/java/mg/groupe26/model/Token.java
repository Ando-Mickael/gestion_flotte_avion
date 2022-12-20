package mg.groupe26.model;

public class Token {

    Integer id;
    Integer idPersonne;
    String dateExpiration;

    public Token() {
    }

    public Token(Integer id, Integer idPersonne, String dateExpiration) {
        this.id = id;
        this.idPersonne = idPersonne;
        this.dateExpiration = dateExpiration;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdPersonne() {
        return idPersonne;
    }

    public void setIdPersonne(Integer idPersonne) {
        this.idPersonne = idPersonne;
    }

    public String getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(String dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

}

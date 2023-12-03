package fr.sdv.cnit.university.tpteamshandlingapi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "TEAM")
public class TeamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "slogan")
    private String slogan;

    //    @JoinColumn(name = "team_id")
    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<PlayerEntity> players;

    public TeamEntity() {
    }

    public TeamEntity(String name, String slogan) {
        this.name = name;
        this.slogan = slogan;
    }

    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public String getSlogan() {
        return slogan;
    }

    public List<PlayerEntity> getPlayers() {
        return players;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public void setPlayers(List<PlayerEntity> players) {
        this.players = players;
    }

}

package fr.sdv.cnit.university.tpteamshandlingapi.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "PLAYER")
public class PlayerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "number")
    private int number;

    @Column(name = "position")
    private String position;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private TeamEntity team;

    public PlayerEntity() {
    }

    public PlayerEntity(String name, int number, String position, TeamEntity team) {
        this.name = name;
        this.number = number;
        this.position = position;
        this.team = team;
    }

    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public int getNumber() {
        return number;
    }

    public String getPosition() {
        return position;
    }

    public TeamEntity getTeam() {
        return team;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setTeam(TeamEntity team) {
        this.team = team;
    }
}


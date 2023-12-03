package fr.sdv.cnit.university.tpteamshandlingapi.controller;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.PlayerEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.entity.TeamEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/teams")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TeamController {

    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping
    public ResponseEntity<List<TeamEntity>> getAllTeams() {
        List<TeamEntity> teams = teamService.getAllTeams();
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamEntity> getTeamById(@PathVariable Long id) {
        Optional<TeamEntity> team = teamService.getTeamById(id);
        return team.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/{id}/players")
    public ResponseEntity<List<PlayerEntity>> getAllPlayersForTeam(@PathVariable Long id) {
        Optional<TeamEntity> team = teamService.getTeamById(id);
        return team.map(value -> new ResponseEntity<>(value.getPlayers(), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TeamEntity> createTeam(@RequestBody TeamEntity team) {
        TeamEntity createdTeam = teamService.saveTeam(team);
        return new ResponseEntity<>(createdTeam, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamEntity> updateTeam(@PathVariable Long id, @RequestBody TeamEntity updatedTeam) {
        TeamEntity team = teamService.updateTeam(id, updatedTeam);
        return team != null
                ? new ResponseEntity<>(team, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
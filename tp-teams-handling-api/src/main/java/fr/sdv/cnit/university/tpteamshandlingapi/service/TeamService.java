package fr.sdv.cnit.university.tpteamshandlingapi.service;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.PlayerEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.entity.TeamEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<TeamEntity> getAllTeams() {
        return teamRepository.findAll();
    }

    public Optional<TeamEntity> getTeamById(Long id) {
        return teamRepository.findById(id);
    }

    public List<PlayerEntity> getAllPlayersForTeam(Long id) {
        Optional<TeamEntity> team = teamRepository.findById(id);
        return team.map(TeamEntity::getPlayers).orElse(Collections.emptyList());
    }

    public TeamEntity saveTeam(TeamEntity team) {
        return teamRepository.save(team);
    }

    public TeamEntity updateTeam(Long id, TeamEntity updatedTeam) {
        Optional<TeamEntity> existingTeamOptional = teamRepository.findById(id);

        if (existingTeamOptional.isPresent()) {
            TeamEntity existingTeam = existingTeamOptional.get();
            existingTeam.setName(updatedTeam.getName());
            existingTeam.setSlogan(updatedTeam.getSlogan());

            return teamRepository.save(existingTeam);
        } else {
            return null;
        }
    }

    public void deleteTeam(Long id) {
        teamRepository.deleteById(id);
    }
}

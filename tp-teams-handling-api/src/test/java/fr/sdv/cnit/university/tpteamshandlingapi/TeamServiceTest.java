package fr.sdv.cnit.university.tpteamshandlingapi;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.TeamEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.repository.TeamRepository;
import fr.sdv.cnit.university.tpteamshandlingapi.service.TeamService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TeamServiceTest {

    @Mock
    private TeamRepository teamRepository;

    @InjectMocks
    private TeamService teamService;

    @Test
    public void getAllTeams_ShouldReturnListOfTeams() {
        // Given
        List<TeamEntity> teams = new ArrayList<>();
        when(teamRepository.findAll()).thenReturn(teams);

        // When
        List<TeamEntity> result = teamService.getAllTeams();

        // Then
        assertThat(result).isEqualTo(teams);
    }

    @Test
    public void getTeamById_WithValidId_ShouldReturnTeam() {
        // Given
        Long teamId = 1L;
        TeamEntity teamEntity = new TeamEntity("Team1", "Slogan1");
        when(teamRepository.findById(teamId)).thenReturn(Optional.of(teamEntity));

        // When
        Optional<TeamEntity> result = teamService.getTeamById(teamId);

        // Then
        assertThat(result).isPresent().contains(teamEntity);
    }

    @Test
    public void saveTeam_ShouldReturnSavedTeam() {
        // Given
        TeamEntity teamEntity = new TeamEntity("Nouvelle équipe", "Slogan de la nouvelle équipe");
        when(teamRepository.save(teamEntity)).thenReturn(teamEntity);

        // When
        TeamEntity result = teamService.saveTeam(teamEntity);

        // Then
        assertThat(result).isEqualTo(teamEntity);
    }

    @Test
    public void updateTeam_WithValidId_ShouldReturnUpdatedTeam() {
        // Given
        Long teamId = 1L;
        TeamEntity existingTeam = new TeamEntity("Nouvelle équipe", "Slogan de la nouvelle équipe");
        TeamEntity updatedTeam = new TeamEntity("Équipe mise à jour", "Slogan de l'équipe mise à jour");
        when(teamRepository.findById(teamId)).thenReturn(Optional.of(existingTeam));
        when(teamRepository.save(existingTeam)).thenReturn(existingTeam);

        // When
        TeamEntity result = teamService.updateTeam(teamId, updatedTeam);

        // Then
        assertThat(result).isEqualTo(existingTeam);
        assertThat(existingTeam.getName()).isEqualTo(updatedTeam.getName());
        assertThat(existingTeam.getSlogan()).isEqualTo(updatedTeam.getSlogan());
    }

    @Test
    public void deleteTeam_WithValidId_ShouldDeleteTeam() {
        // Given
        Long teamId = 1L;

        // When
        teamService.deleteTeam(teamId);

        // Then
        verify(teamRepository, times(1)).deleteById(teamId);
    }


}

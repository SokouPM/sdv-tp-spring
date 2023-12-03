package fr.sdv.cnit.university.tpteamshandlingapi;

import fr.sdv.cnit.university.tpteamshandlingapi.controller.TeamController;
import fr.sdv.cnit.university.tpteamshandlingapi.entity.TeamEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.service.TeamService;
import io.restassured.module.mockmvc.RestAssuredMockMvc;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;

import java.util.List;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.mockito.Mockito.when;

public class TeamControllerTest {

    @Mock
    private TeamService teamService;

    @InjectMocks
    private TeamController teamController;

    @BeforeEach
    public void initializeRestAssuredMockMvcStandalone() {
        MockitoAnnotations.openMocks(this);
        RestAssuredMockMvc.standaloneSetup(teamController);
    }

    @Test
    public void testGetAllTeams() {
        // Given
        when(teamService.getAllTeams()).thenReturn(List.of());

        // When & Then
        given().when().get("/api/teams").then().statusCode(HttpStatus.OK.value());
    }

    @Test
    public void testGetTeamById() {
        // Given
        long teamId = 1L;
        when(teamService.getTeamById(teamId)).thenReturn(java.util.Optional.of(new TeamEntity()));

        // When & Then
        given().when().get("/api/teams/{id}", Long.toString(teamId)).then().statusCode(HttpStatus.OK.value());
    }

    @Test
    public void testCreateTeam() {
        // Given
        TeamEntity teamEntity = new TeamEntity("Nouvelle équipe", "Slogan de la nouvelle équipe");
        when(teamService.saveTeam(teamEntity)).thenReturn(new TeamEntity(
                teamEntity.getName(),
                teamEntity.getSlogan()
        ));

        // When & Then
        given().when().post("/api/teams").then().statusCode(HttpStatus.CREATED.value()).log().all();
    }

    @Test
    public void testUpdateTeam() {
        // Given
        long teamId = 1L;
        TeamEntity updatedTeam = new TeamEntity(
                "Modif équipe",
                "Slogan de la modif équipe"
        );
        when(teamService.updateTeam(teamId, updatedTeam)).thenReturn(new TeamEntity(
                updatedTeam.getName(),
                updatedTeam.getSlogan()
        ));


        // When & Then
        given().when().put("/api/teams/{id}", Long.toString(teamId)).then().statusCode(HttpStatus.OK.value());
    }


    @Test
    public void testDeleteTeam() {
        // Given
        long teamId = 1L;

        // When & Then
        given().when().delete("/api/teams/{id}", Long.toString(teamId)).then().statusCode(HttpStatus.NO_CONTENT.value());
    }
}

package fr.sdv.cnit.university.tpteamshandlingapi.controller;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.PlayerEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/players")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public ResponseEntity<List<PlayerEntity>> getAllPlayers() {
        List<PlayerEntity> players = playerService.getAllPlayers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerEntity> getPlayerById(@PathVariable Long id) {
        Optional<PlayerEntity> player = playerService.getPlayerById(id);
        return player.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<PlayerEntity> createPlayer(@RequestBody PlayerEntity player) {
        PlayerEntity createdPlayer = playerService.savePlayer(player);
        return new ResponseEntity<>(createdPlayer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlayerEntity> updatePlayer(@PathVariable Long id, @RequestBody PlayerEntity updatedPlayer) {
        PlayerEntity player = playerService.updatePlayer(id, updatedPlayer);
        return player != null
                ? new ResponseEntity<>(player, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable Long id) {
        playerService.deletePlayer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package fr.sdv.cnit.university.tpteamshandlingapi.service;

import fr.sdv.cnit.university.tpteamshandlingapi.entity.PlayerEntity;
import fr.sdv.cnit.university.tpteamshandlingapi.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<PlayerEntity> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Optional<PlayerEntity> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }


    public PlayerEntity savePlayer(PlayerEntity player) {
        return playerRepository.save(player);
    }

    public PlayerEntity updatePlayer(Long id, PlayerEntity updatedPlayer) {
        Optional<PlayerEntity> existingPlayerOptional = playerRepository.findById(id);

        if (existingPlayerOptional.isPresent()) {
            PlayerEntity existingPlayer = existingPlayerOptional.get();
            existingPlayer.setName(updatedPlayer.getName());
            existingPlayer.setNumber(updatedPlayer.getNumber());
            existingPlayer.setPosition(updatedPlayer.getPosition());
            existingPlayer.setTeam(updatedPlayer.getTeam());

            return playerRepository.save(existingPlayer);
        } else {
            return null;
        }
    }

    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }
}

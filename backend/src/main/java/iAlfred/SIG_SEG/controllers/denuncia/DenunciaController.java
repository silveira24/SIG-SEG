package iAlfred.SIG_SEG.controllers.denuncia;

import iAlfred.SIG_SEG.domain.denuncia.Denuncia;
import iAlfred.SIG_SEG.domain.denuncia.RequestDenuncia;
import iAlfred.SIG_SEG.repositories.denuncia.DenunciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/denuncia")
public class DenunciaController {

    @Autowired
    private DenunciaRepository repository;

    @GetMapping
    public ResponseEntity getAllDenuncias() {
        var allDenuncias = repository.findAll();
        return ResponseEntity.ok().body(allDenuncias);
    }

    @GetMapping("/{id}")
    public ResponseEntity getDenuciaById(@PathVariable String id) {
        Optional<Denuncia> optionalDenuncia = repository.findById(id);
        if(optionalDenuncia.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(optionalDenuncia.get());
    }

    @PostMapping
    public ResponseEntity registrarDenuncia(@RequestBody RequestDenuncia dados) {
        Denuncia novaDenuncia = new Denuncia(dados);
        repository.save(novaDenuncia);
        return ResponseEntity.ok().body(novaDenuncia.getId());
    }
}

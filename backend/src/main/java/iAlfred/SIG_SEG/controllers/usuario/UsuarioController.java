package iAlfred.SIG_SEG.controllers.usuario;

import iAlfred.SIG_SEG.domain.usuario.RequestUsuario;
import iAlfred.SIG_SEG.excecoes.EmailJaCadastradoException;
import iAlfred.SIG_SEG.service.usuario.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity registrarUsuario(@RequestBody @Valid RequestUsuario usuario) {
        try {
            usuarioService.salvarUsuario(usuario);
            return ResponseEntity.status(HttpStatus.CREATED).body("Usuário cadastrado com sucesso");
        } catch (EmailJaCadastradoException e) {
            return ResponseEntity.badRequest().body("Email já cadastrado");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro inesperado" + e.getMessage());
        }
    }
}

package iAlfred.SIG_SEG.controllers.usuario;

import iAlfred.SIG_SEG.domain.usuario.RequestUsuario;
import iAlfred.SIG_SEG.excecoes.EmailJaCadastradoException;
import iAlfred.SIG_SEG.excecoes.SenhaInvalidaException;
import iAlfred.SIG_SEG.excecoes.UsuarioNaoEncontradoException;
import iAlfred.SIG_SEG.service.usuario.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public ResponseEntity Logar(@RequestBody RequestUsuario usuario) {
        try {
            String token = usuarioService.logarUsuario(usuario);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(token);
        } catch (SenhaInvalidaException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Senha inválida");
        } catch (UsuarioNaoEncontradoException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("email não cadastrado");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro inesperado" + e.getMessage());
        }
    }

    @PostMapping("/{token}")
    public ResponseEntity verificarToken(@PathVariable String token){
        try {
            if(usuarioService.validarToken(token)) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body("token válido");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("token inválido");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

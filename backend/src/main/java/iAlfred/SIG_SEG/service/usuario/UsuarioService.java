package iAlfred.SIG_SEG.service.usuario;

import iAlfred.SIG_SEG.domain.usuario.RequestUsuario;
import iAlfred.SIG_SEG.domain.usuario.Usuario;
import iAlfred.SIG_SEG.excecoes.EmailJaCadastradoException;
import iAlfred.SIG_SEG.repositories.usuario.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    private final PasswordEncoder passwordEncoder;
    @Autowired
    private UsuarioRepository repository;

    public UsuarioService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void salvarUsuario(RequestUsuario usuario) {

        if(repository.existsByEmail(usuario.email())) {
            throw new EmailJaCadastradoException("Email já cadastrado");
        }

        String senhaCodificada = passwordEncoder.encode(usuario.senha());
        Usuario novoUsuario = new Usuario();
        novoUsuario.setNome(usuario.nome());
        novoUsuario.setEmail(usuario.email());
        novoUsuario.setSenha(senhaCodificada);
        repository.save(novoUsuario);
    }
}

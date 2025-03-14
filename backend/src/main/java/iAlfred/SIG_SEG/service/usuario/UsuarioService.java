package iAlfred.SIG_SEG.service.usuario;

import iAlfred.SIG_SEG.domain.usuario.RequestUsuario;
import iAlfred.SIG_SEG.domain.usuario.Usuario;
import iAlfred.SIG_SEG.excecoes.EmailJaCadastradoException;
import iAlfred.SIG_SEG.excecoes.SenhaInvalidaException;
import iAlfred.SIG_SEG.excecoes.UsuarioNaoEncontradoException;
import iAlfred.SIG_SEG.repositories.usuario.UsuarioRepository;
import iAlfred.SIG_SEG.security.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public String logarUsuario(RequestUsuario usuario) {
        Usuario usuarioEncontrado = repository.findByEmail(usuario.email())
                .orElseThrow(() -> new UsuarioNaoEncontradoException("Email não cadastrado!"));

        if(!passwordEncoder.matches(usuario.senha(), usuarioEncontrado.getSenha())){
            throw new SenhaInvalidaException("Email ou senha errados!");
        }

        return TokenUtil.generateToken(usuario.email());
    }

    public boolean validarToken(String token) {
        return TokenUtil.isTokenValid(token);
    }
}

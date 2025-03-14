package iAlfred.SIG_SEG.repositories.usuario;

import iAlfred.SIG_SEG.domain.usuario.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    boolean existsByEmail(String email); 
}

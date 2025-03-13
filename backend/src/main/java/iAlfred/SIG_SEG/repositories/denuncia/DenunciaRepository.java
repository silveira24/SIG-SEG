package iAlfred.SIG_SEG.repositories.denuncia;

import iAlfred.SIG_SEG.domain.denuncia.Denuncia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DenunciaRepository extends JpaRepository<Denuncia, String> {
}

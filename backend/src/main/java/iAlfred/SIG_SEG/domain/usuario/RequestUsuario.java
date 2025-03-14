package iAlfred.SIG_SEG.domain.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RequestUsuario(
        String id,
        String nome,
        @NotBlank @Email
        String email,
        @NotBlank
        String senha
) {
}

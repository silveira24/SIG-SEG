package iAlfred.SIG_SEG.domain.denuncia;

import iAlfred.SIG_SEG.enums.Bairros;
import iAlfred.SIG_SEG.enums.StatusDenuncia;
import iAlfred.SIG_SEG.enums.TipoDenuncia;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record RequestDenuncia(
    String id,
    @NotBlank
    TipoDenuncia tipoDenuncia,
    @NotBlank
    String descricao,
    @NotBlank
    Bairros bairro,
    @NotBlank
    LocalDate data
) {}


package iAlfred.SIG_SEG.domain.denuncia;

import iAlfred.SIG_SEG.enums.Bairros;
import iAlfred.SIG_SEG.enums.StatusDenuncia;
import iAlfred.SIG_SEG.enums.TipoDenuncia;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="denuncia")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of ="id")
public class Denuncia {
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "tipodenuncia")
    @Enumerated(EnumType.STRING)
    private TipoDenuncia tipoDenuncia;
    private String descricao;
    @Enumerated(EnumType.STRING)
    private Bairros bairro;
    private LocalDate data;
    @Enumerated(EnumType.STRING)
    private StatusDenuncia status;

    public Denuncia(RequestDenuncia denuncia) {
        this.tipoDenuncia = denuncia.tipoDenuncia();
        this.descricao = denuncia.descricao();
        this.bairro = denuncia.bairro();
        this.data = denuncia.data();
        this.status = StatusDenuncia.RECEBIDA;
    }
}

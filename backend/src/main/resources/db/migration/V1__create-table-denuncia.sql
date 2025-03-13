CREATE TABLE denuncia (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    tipoDenuncia TEXT NOT NULL,
    descricao TEXT NOT NULL,
    bairro TEXT NOT NULL,
    data DATE NOT NULL
);
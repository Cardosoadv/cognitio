# Palette 🎨 — Relatório de Atividades

## Data: 2026-04-21
## Versão: 1.2.0

### Ações Realizadas
1. **Extração de Estilos Inline**: Removidos centenas de atributos `style="..."` do arquivo `cognitio.html`.
2. **Centralização de CSS**: Todo o estilo foi movido para o arquivo `cognitio.css`.
3. **Criação de Sistema de Utilitários**: Adicionadas classes para Flexbox, Grid, Espaçamento e Alinhamento, facilitando a reutilização e mantendo a consistência visual.
4. **Resolução de Estilos Dinâmicos**: Implementado uso de CSS Variables (`--avatar-bg`, `--prod-color`, etc.) injetadas via Vue.js, permitindo que o HTML permaneça limpo enquanto mantém a flexibilidade de dados dinâmicos.
5. **Melhoria na Manutenibilidade**: O código agora segue os princípios "Palette" de separação de responsabilidades e centralização de recursos.

### Lições Aprendidas
- A refatoração de estilos inline em massa exige uma base sólida de classes utilitárias para evitar a criação excessiva de classes específicas de componentes.
- O uso de CSS Variables é a ponte perfeita entre a reatividade do Vue.js e o CSS centralizado.

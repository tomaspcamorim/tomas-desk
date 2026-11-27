# Casa do Tomás

> A página inicial do Tomás (11 anos): horário, treinos, jogos e testes para treinar para a escola.

## Sobre
- **Para quem:** o Tomás, 11 anos, **6.º ano em Portugal** (2.º ciclo). Todos os testes seguem o currículo português deste ano. Gosta de futebol, impressão 3D, xadrez e jogos de PC.
- **Língua:** português (PT)
- **Objetivo:** ser a página inicial do Chrome e um sítio de treino para a escola.

## Visual
- Tema Neutral do Astryx, com tipografia Figtree, superfícies claras e verde para destacar a navegação e o próximo jogo.
- Os editores de impressão 3D usam a variante escura do tema Neutral, com a mesma tipografia e estilos de campos do painel.

## Páginas
- **Início** (`/`) – saudação com hora, pesquisa, horário da semana, próximos jogos, testes e atalhos.
- **Calendário** (`/calendario`) – o calendário do Google do Tomás, com vistas Semana / Lista / Mês. O endereço está em `lib/data.ts` (`calendarioGoogle`).
- **Centro de treino** (`/testes`) – lista todos os testes com filtro por disciplina, recordes e resumo (quantos já fez, quantos com nota máxima).
- **Testes** (`/testes/matematica`, `/portugues`, `/ciencias`, `/descobrimentos`, `/ingles`, `/xadrez`) – perguntas de escolha múltipla com pontuação e recorde (guardado no browser).

## Onde mudar as coisas
Tudo está num só ficheiro: `lib/data.ts`
- **Horário semanal** (`horarioSemanal`) – treinos do LSC já estão certos (Seg e Qui 19:00–20:15 no Oscar Marques; Ter e Qua 19:00–20:00 em Perafita). O horário da escola (EBS Carolina Michaëlis) está completo, com sala e hora de cada aula.
- **Jogos** – vêm sozinhos do calendário do Google da equipa (Leixões Sub13 B). Basta adicionar ou alterar o jogo no calendário; a página atualiza em até 15 minutos. Ficheiro: `lib/calendario.ts`.
- **Atalhos** (`atalhos`)
- **Testes** (`testes`) – copiar um bloco para criar um teste novo.
Ou pede ao Claude: "adiciona um teste de ciências com estas perguntas".

## Chrome como página inicial
Chrome → Definições → "Ao iniciar" → "Abrir uma página específica" → adicionar o endereço do site. (Enquanto estiver só no computador, usa o endereço local; para funcionar sempre, publica o site.)

## Emblemas dos clubes
Coloca os ficheiros em `public/clubes/` (ver `LEIA-ME.txt` lá dentro para os nomes). Enquanto faltarem, aparece um círculo com as iniciais.

## Alterações recentes
- 2026-11-27: Aplicado o sistema de design Astryx ao painel, calendário, testes, biblioteca e editores 3D.
- 2026-11-27: Novo painel com horário em destaque, navegação partilhada e disposição adaptada a ecrãs pequenos.
- 2026-11-27: Horário real da escola (aulas, horas e salas, de segunda a sexta), lido da foto.
- 2026-11-27: Adicionados 10 emblemas em `public/clubes/`. Falta só o do Leça FC (`leca-fc.png`).
- 2026-11-27: Preparada a página para emblemas de clubes (com iniciais enquanto não houver ficheiros).
- 2026-11-27: Jogos, contagem decrescente, próximos jogos e resultados ligados ao calendário do Google (Leixões Sub13 B). Jogos aparecem também no horário do dia certo da semana.
- 2026-11-27: Horário real dos treinos do LSC (com hora de fim e local).
- 2026-11-27: Nova página `/calendario` com o calendário do Google; ligação "Calendário completo" no cartão do horário.
- 2026-11-27: Nova página `/testes` (centro de treino) com filtro por disciplina; ligada ao cartão "Treino para a escola".
- 2026-11-27: Novo teste de Inglês (gramática e vocabulário). Os testes ficam em 2 colunas no ecrã horizontal.
- 2026-11-27: Testes reescritos para o 6.º ano (Matemática, Português, Ciências Naturais, Descobrimentos, Xadrez); atalho "Escola Virtual".
- 2026-11-27: Otimizado para ecrã horizontal (computador/tablet): tudo cabe num só ecrã, sem scroll, em 3 colunas. Em vertical ou ecrãs pequenos, a página empilha como antes.
- 2026-11-27: Redesenho completo (cartões, ícones, contagem para o próximo jogo, recorde de cada teste na página inicial).
- 2026-11-27: Criada a página inicial, o horário, os atalhos e 3 testes de exemplo.

# Registro de Testes Unitários 
Aluno: Isadora Aquino Moraes
Data: 24/09/2026 

## Testes escritos 
| # | Arquivo | O que o teste verifica | Tipo |
| --- | ------- | ---------------------- | ----------------------- |
| 1 | tests/unit/validators.test.js | E-mail válido não retorna erro | sucesso |
| 2 | tests/unit/validators.test.js | E-mail sem @ retorna mensagem de erro | falha |
| 3 | tests/unit/validators.test.js | Nome com tamanho exato (3 caracteres) é aceito | borda |
| 4 | tests/unit/parseId.test.js | ID com letras misturadas ("12abc") lança erro | falha |

## Resultado 
Passaram: 5
Falharam: 1

## Defeito encontrado 
Teste: parseId com ID contendo letras misturadas ("12abc")
Esperado: Lançar ValidationError por não ser um número válido
Obtido: A função aceitou o valor parcialmente e não lançou erro

## Cobertura 
% Lines da linha "helpers": 55.55%
Em uma frase, o que esse número significa: Representa a porcentagem de linhas do código das funções auxiliares (helpers) que foram executadas e validadas pelos testes unitários rodados.
const popoverOpts = {
    placement: 'bottom',
    trigger: 'hover',
    html: true,
}

const popoverContent = '<div id="dinamicaPopover" class="openpopover">';


$(document).ready(function() {
    $('.primeirainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<p>O imposto de renda deve ser pago ao longo do ano-calendário, assim que os rendimentos são recebidos. Na maioria das vezes, o imposto é retido e pago pela fonte pagadora. Em outros casos, o pagamento deve ser realizado pelo próprio cidadão, por meio do carnê-leão. Se o imposto a pagar for inferior a R$ 10,00 você não precisa pagar. O imposto entre R$ 10,00 e R$ 100,00 deve ser pago em quota única (em uma vez).</p></div>`
    });
    $('.segundainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}
        <p class="openpopover__title">Renda</p>
        <p>Recebeu rendimentos tributáveis acima do limite (R$ 28.559,70);</p>
        <p class="openpopover__title">Rural</p>
        <p>Obteve receita bruta anual decorrente de atividade rural em valor acima do limite (R$ 142.798,50);</p>
        <p class="openpopover__title">Imovel</p>
        <p>Obteve ganho de capital na alienação de bens ou direitos, sujeito à incidência do imposto;</p>
        <p class="openpopover__title">Bolsa</p>
        <p>Realizou operações em bolsas de valores, de mercadorias, de futuros e assemelhadas.</p>`
    });
    $('.terceirainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<p>A ideia é que a parcela da população com rendimentos maiores contribuem mais para o governo, a fim de gerar dinheiro para melhorias na qualidade de vida de toda população.</p></div>`
    });
    $('.quartainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<p>De acordo com o Ministério da Fazenda, parte dos impostos arrecadados é destinada à saúde, educação e programas de transferências de renda, como "Fome Zero" e "Bolsa Família".</p><br><p>Outras frações são destinadas a programas de geração de empregos e inclusão social, investimentos em infraestrutura, segurança pública, cultura, esporte, defesa do meio ambiente e estímulo ao desenvolvimento da ciência e tecnologia.</p></div>`
    });
    $('.quintainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}
       <p> No ano seguinte ao recebimento dos rendimentos (exercício) é feita a declaração de ajuste do imposto de renda, onde informamos tudo que recebemos e tudo o que foi pago (ou retido) de imposto no ano-calendário. O programa do imposto de renda faz os cálculos e verifica se: </p> 
       <br>
       <p>● O imposto já pago foi exatamente o valor devido, gerando uma declaração sem saldo a pagar ou a receber;</p>
       <p>● O imposto já pago foi menor que o devido, gerando declaração com imposto a pagar;</p>
       <p>● O imposto já pago foi maior que o devido, gerando declaração com imposto a restituir.</p>
    </div>`
    });
    $('.sextainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}
        <p>● Pessoas que recebem benefício, com uma ou mais doenças listada na Lei nº 7.713/88, mesmo que tenha sido contraída depois da aposentadoria.</p>
        <p>● Pessoas com rendimentos tributáveis menores de R$ 28.559,70 durante o ano-calendário;</p>
        <p>● Pessoas com receita bruta de atividade rural abaixo de R$ 142.798,50;</p>
        <p>● Pessoas aposentadas por incapacidade ou invalidez;</p>
        <p>● Aposentados e pensionistas com 65 anos ou mais que recebam até R$ 3.807,96 por mês ou R$ 24.751,74 por ano de aposentadoria.</p>
        </div>`
    });
});
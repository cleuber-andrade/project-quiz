import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Quem é o mais forte de Jujutsu Kaisen?", [
    RespostaModel.errada("Sukuna"),
    RespostaModel.errada("Itadori"),
    RespostaModel.errada("Megumi"),
    RespostaModel.certa("Gojo"),
  ]),

  new QuestaoModel(202, "Quantos dedos o Itadori comeu?(1ª temporada)", [
    RespostaModel.errada("7"),
    RespostaModel.errada("6"),
    RespostaModel.errada("20"),
    RespostaModel.certa("4"),
  ]),

  new QuestaoModel(304, "Qual é o nome da principal técnica do Megumi", [
    RespostaModel.errada("Dark Shadow"),
    RespostaModel.errada("Banho de Tinta"),
    RespostaModel.errada("Rebanho"),
    RespostaModel.certa("Dez Sombras"),
  ]),

  new QuestaoModel(700, "Qual a maldição mais forte de Jujutsu Kaisen?", [
    RespostaModel.errada("Hanami"),
    RespostaModel.errada("Mahito"),
    RespostaModel.errada("Hanami"),
    RespostaModel.certa("Suikuna"),
  ]),

  new QuestaoModel(101, "Qual é o personagem possui o poder do titã Blindado?", [
    RespostaModel.errada("Levi"),
    RespostaModel.errada("Sasha"),
    RespostaModel.errada("Eren"),
    RespostaModel.certa("Reiner"),
  ]),

  new QuestaoModel(240, "Qual titã que destruiu a muralha Maria no inicio do anime?", [
    RespostaModel.errada("Blindado"),
    RespostaModel.errada("Martelo de Guerra"),
    RespostaModel.errada("Bestial"),
    RespostaModel.certa("Colossal"),
  ]),

  new QuestaoModel(720, "Quais são as três muralhas que 'protegem' os humanos?", [
    RespostaModel.errada("Nifa, Mia e Ria"),
    RespostaModel.errada("Dina, Mil, Rose"),
    RespostaModel.errada("Maria, Rose e Mina"),
    RespostaModel.certa("Maria, Rose e Sina"),
  ]),

  new QuestaoModel(840, "Quem é o tio de Levi?(SnK)", [
    RespostaModel.errada("Kun Caral"),
    RespostaModel.errada("Erwin Smith"),
    RespostaModel.errada("Grisha Jaeger"),
    RespostaModel.certa("Kenny Ackerman"),
  ]),

  new QuestaoModel(100, "O que Mikasa é de Levi?", [
    RespostaModel.errada("Neta"),
    RespostaModel.errada("Sobrinha"),
    RespostaModel.errada("Filha"),
    RespostaModel.certa("Prima"),
  ]),

  new QuestaoModel(150, "Quantos anos tinha Naruto no início do anime clássico?", [
    RespostaModel.errada("13"),
    RespostaModel.errada("11"),
    RespostaModel.errada("17"),
    RespostaModel.certa("12"),
  ]),

  new QuestaoModel(170, "Quanto anos tinha Naruto no início do Shippuden?", [
    RespostaModel.errada("13"),
    RespostaModel.errada("17"),
    RespostaModel.errada("12"),
    RespostaModel.certa("15"),
  ]),

  new QuestaoModel(190, "Por quem Naruto prometeu que iria ganhar de Neji?", [
    RespostaModel.errada("Gaara"),
    RespostaModel.errada("Sakura"),
    RespostaModel.errada("Sasuke"),
    RespostaModel.certa("Rock Lee"),
  ]),

  new QuestaoModel(220, "Qual o nome do 2º hokage?", [
    RespostaModel.errada("Tsunade"),
    RespostaModel.errada("Sarutobi"),
    RespostaModel.errada("Minato"),
    RespostaModel.certa("Tobirama"),
  ]),

  new QuestaoModel(230, "O que aconteceu com Naruto e Sasuke ao juntarem o Rasengan e o chidori?", [
    RespostaModel.errada("NDA"),
    RespostaModel.errada("Os dois morreram"),
    RespostaModel.errada("Os dois perderam as pernas"),
    RespostaModel.certa("Os dois perderam os braços"),
  ]),

  new QuestaoModel(250, "Quais os nomes do filhos do Narutos e Hinata", [
    RespostaModel.errada("Metal e Chocho"),
    RespostaModel.errada("Sarada e Mitsuki"),
    RespostaModel.errada("Shikadai e Inojin"),
    RespostaModel.certa("Boruto e Himawari"),
  ]),

  new QuestaoModel(260, "Como se chamam as armas da CCG?(Tokio Ghoul)", [
    RespostaModel.errada("Tanaka"),
    RespostaModel.errada("Kagume"),
    RespostaModel.errada("Rinkaku"),
    RespostaModel.certa("Quinque"),
  ]),

  new QuestaoModel(270, "Como se chamam a filha do Kaneki?(Tokio Ghoul)", [
    RespostaModel.errada("Hiromi Kaneki"),
    RespostaModel.errada("Touca Kaneki"),
    RespostaModel.errada("Naoto Kaneki"),
    RespostaModel.certa("Ichika Kaneki"),
  ]),

  new QuestaoModel(280, "Como é o nome da Ghoul que atacou Kaneki no primeiro episódio?", [
    RespostaModel.errada("Rizy"),
    RespostaModel.errada("Eto"),
    RespostaModel.errada("Rika"),
    RespostaModel.certa("Rise"),
  ]),

  new QuestaoModel(290, "Kaneki é qual tipo de Ghoul?", [
    RespostaModel.errada("Ghoul da Serpente"),
    RespostaModel.errada("Ghoul de uma perna só"),
    RespostaModel.errada("Ghoul do Dragão"),
    RespostaModel.certa("Ghoul de um olho"),
  ]),

  new QuestaoModel(300, "Quem é a esposa de Ken Kaneki?", [
    RespostaModel.errada("Akira"),
    RespostaModel.errada("Tooru"),
    RespostaModel.errada("Rise"),
    RespostaModel.certa("Touca"),
  ]),

  new QuestaoModel(310, "Quem foi o criador da primeira respiração?", [
    RespostaModel.errada("Tokito"),
    RespostaModel.errada("Rengoku"),
    RespostaModel.errada("Giyu"),
    RespostaModel.certa("Yoriichi"),
  ]),

  new QuestaoModel(320, "Qual foi a primeira respiração criada?", [
    RespostaModel.errada("Respiração do Amor"),
    RespostaModel.errada("Respiração do Som"),
    RespostaModel.errada("Respiração do Fogo"),
    RespostaModel.certa("Respiração do Sol"),
  ]),

  new QuestaoModel(330, "Quem matou a família Tanjiro?", [
    RespostaModel.errada("Douma"),
    RespostaModel.errada("Kokushibo"),
    RespostaModel.errada("Giyu"),
    RespostaModel.certa("Muzan"),
  ]),

  new QuestaoModel(340, "Tanjiro,é portador de quais ou qual respiração", [
    RespostaModel.errada("Não possui respiração"),
    RespostaModel.errada("Da Água"),
    RespostaModel.errada("Do sol"),
    RespostaModel.certa("Respiração do Sol e Respiração da Água"),
  ]),

  new QuestaoModel(350, "Quem é o protagonista de SAO?", [
    RespostaModel.errada("Kirigaya"),
    RespostaModel.errada("Klen"),
    RespostaModel.errada("Assuna"),
    RespostaModel.certa("Kirito"),
  ]),

  new QuestaoModel(360, "Qual foi a primeira paixão de Kirito?", [
    RespostaModel.errada("Tomiko"),
    RespostaModel.errada("Sachi"),
    RespostaModel.errada("Shino"),
    RespostaModel.certa("Asuna"),
  ]),

  new QuestaoModel(370, "Afrodite é guardião da Casa de Peixes e utiliza ataques com rosas, que são identificadas de diferentes cores. Qual a cor das 'Rosas Piranhas'?", [
    RespostaModel.errada("Roxas"),
    RespostaModel.errada("Brancas"),
    RespostaModel.errada("Vermelhas"),
    RespostaModel.certa("Pretas"),
  ]),

  new QuestaoModel(380, "A pessoa conhecida pelos Cavaleiros como 'Homem mais próximo de um Deus' é", [
    RespostaModel.errada("Aioria"),
    RespostaModel.errada("Milo"),
    RespostaModel.errada("Aldebaram"),
    RespostaModel.certa("Chaka"),
  ]),

  new QuestaoModel(390, "Mu de Áries teve como mestre:", [
    RespostaModel.errada("Saga"),
    RespostaModel.errada("Shaka"),
    RespostaModel.errada("Kiki"),
    RespostaModel.certa("Shion"),
  ]),

  new QuestaoModel(400, "Quem é o líder dos Vermillion?", [
    RespostaModel.errada("Luck"),
    RespostaModel.errada("Yami"),
    RespostaModel.errada("Leo"),
    RespostaModel.certa("Mereleonora"),
  ]),
  
]

export default questoes
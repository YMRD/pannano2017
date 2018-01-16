var data = (function(){

    var data, area, authors, title,

    init = function(){
        data = {};
        area = {};
        authors = {};
        title = [];
        _read();
        return this;
    },

    _read = function(){
        var  i, j, current, authorArr, author;

        for (i = 0; i < _data.length; i++){
            current = _data[i];
            _addMap(data, current.title, current);
            title.push(current.title);
            _addMap(area, current.area, current.title);
            authorArr = current.authors.split(";");
            for (j = 0; j < authorArr.length; j++){
                author = authorArr[j].trim();
                _addMap(authors, author, current.title);
            }
        }
    },

    getByArea = function(){
        return area;
    },

    getByAuthor = function(){
        return authors;
    },

    getByTitle = function(){
        return title;
    },

    getPaper = function(title){

    },

    _addMap = function(map, key, value){
        if(!map[key]) map[key] = [];
        if(map[key].indexOf(value) === -1) map[key].push(value);
    },

    _data = [
        {
            "code": "BVGK",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Radiation-induced \"one pot\" synthesis for cell therapies",
            "authors": "Ademar B. Lugao",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZK",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Nanostructures for heterogeneous photocatalysis",
            "authors": "Adriana Zaleska-medynska;Pawel Mazierski;Anna Malankowska;Beata Bajorowicz;Magda Kozak;Wojciech Lisowski;Michal P. Winiarski;Tomasz Klimczuk;Grzegorz Nowacyzk;Marek Piotr Kobylanski",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVAE",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Green Synthesis and Characterization of Enzymatically Active Gold Nanoparticles  Using Template of Bromelain",
            "authors": "Adrianne Marlise Brito Brito;Iseli Lourenço Nantes-cardoso",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BT6Y",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Antibacterial Synergistic Interaction of Silver Nanoparticles and Antibiotics",
            "authors": "Alejandro Huerta-saquero;Roberto Vazquez-muñoz;Pierrick Fournier;Rafael Vazquez;Nina Bogdanchikova",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVEG",
            "area": "Nanoinformatics and Modeling",
            "type": "POSTER",
            "title": "Innovation trajectories: an IPEN´s nanotechnology competence roadmapping to match´s market mechanisms",
            "authors": "Aline Araujo Perini;Anderson Zanardi Freitas",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCW",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Different toxic effects on zebrafish embryos after co-exposure to graphene oxide and humic acid: the influence of corium barrier",
            "authors": "Aline Maria Zigiotto De Medeiros;Gabriela Helena Da Silva;Diego Stefani Teodoro Martinez;Vera Lúcia Scherholz Salgado Castro;Regina Teresa Rosim Monteiro",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCJ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Nanostructured Lipid Carriers: Evaluation of flavonoid activity against skin cancer",
            "authors": "Amanda Ferreira Costa;Danijela Stanisic;Renata Saito;Ljubica Tasic;Nelson Durán;Roger Chammas;Paula Aragão Lima;Marcelo Alexandre De Farias;Juliana Da Silva Bernardes;Rodrigo Villares Portugal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4J",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Monitoring Nanoparticle Stability And Mobility In Whole Blood And Tissues In Situ",
            "authors": "Ana C. Bohorquez;Mythreyi Unni;Andreina Chiu Lam;Sayali Belsare;Lori P. Rice;Chris Pampo;Dietmar W. Siemann;Carlos Rinaldi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBT",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Graphene Oxide Associated with Aluminum Chloride-Phthalocyanine as Agents for Combined Therapies ",
            "authors": "Ana Luísa Gouvêa Silva;Mayara Simonelly Dos Santos;Ludmilla David De Moura;Leonardo Giordano Paterno;Paulo Eduardo Souza;Ricardo Bentes De Azevedo;Sonia Nair Báo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCE",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Mixed hydroxide synthesis of nanostructured Ni/Pb as modified electrode material for piroxicam analysis",
            "authors": "Anabel Laza;Josué Martins Gonçalves;Pamela De Oliveira Rossini;Juliana Da Silva Bernardes;Koiti Araki;Lúcio Angnes",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4B",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Microwave-assisted hydrothermal synthesis of Co3O4 nanostructured thin films for gas sensor application",
            "authors": "Anderson A. Felix;Elson Longo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAJ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Graphene oxide as a mechanical reinforcement filler for PLA/Hydroxyapatite composites",
            "authors": "André Da Silva Siqueira;Pablo Andrés Riveros Muñoz;Guilhermino José Macedo Fechine",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSDY",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Nanoenabled textiles: a life cycle case study in environmental benefits and costs ",
            "authors": "Andrea Hicks",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BNMQ",
            "area": "Sustainability",
            "type": "POSTER",
            "title": "Evaluating the life cycle benefits of nanoenabled polymers through food waste avoided ",
            "authors": "Andrea Hicks;Edward Westerband",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTPN",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Hybrid density-functional calculations of formic acid on anatase TiO2(101) surfaces",
            "authors": "Andreia Luisa Da Rosa;Liangzhi Kou;Erika Nascimento Lima;Thomas Frauenheim",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSEQ",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Gold nanoparticles coatings for nanobrachytherapy application ",
            "authors": "Andreza A. D. C. C. Gonzalez;Maria Elisa Chuery Martins Rostelato;Carla Daruich Souza;Beatriz Ribeiro Nogueira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZG",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Application of quantum dots in photocatalysis",
            "authors": "Anna Malankowska;Adriana Zaleska-medynska",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAE",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Surface characterization of latex beads aged for one year and settled in glass bottles. ",
            "authors": "Anthony Maik Correia Da Silva;Antony Ernesto Santos Silva;Phabyanno Rodrigues Lima;Jonas Dos Santos Sousa;Alan John Duarte De Freitas;Johnnatan Duarte De Freitas;Anthony Maik Correia Da Silva",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBX",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Characterization of surface plasmons in noble metal thin film by SNOM",
            "authors": "Antonio Domingues Dos Santos;Fabio Lombardi Maximino",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTJK",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Use of Pseudoboehmite nanoparticles for drug release",
            "authors": "Antônio Hortêncio Munhoz Jr.;Alber Luiz Do Nascimento;Mariana Oliva De Oliveira;Leila Figueiredo De Miranda;Denison Angelotti Moraes",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTJD",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Use of Nanoparticles of gamma-alumina for drug delivery system",
            "authors": "Antônio Hortêncio Munhoz Jr.;Mariana Oliva De Oliveira;Maura Vincenza Rossi;Leila Figueiredo De Miranda;Juliana Alves Luiz Pereira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAS",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Formation of titania mesoporous nanocomposites in latex beads by EISA process. ",
            "authors": "Antony Ernesto Santos Silva;Anthony Maik Correia Da Silva;Phabyanno Rodrigues Lima;Jonas Dos Santos Sousa;Alan John Duarte De Freitas;Johnnatan Duarte De Freitas;Anthony Maik Correia Da Silva",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4H",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Metabolomics as an early indicator of potential implications of engineered nanomaterials",
            "authors": "Arturo A Keller;Lijuan Zhao",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6T",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Iron Nanoparticle Impregnated Carbon Nanohybrids Prepared with Ultrasonic Spray Pyrolysis for Cr (VI) Removal",
            "authors": "Arvid Masud;John D Atkinson;Nirupam Aich",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BARB",
            "area": "INDEFINIDO",
            "type": "ORAL",
            "title": "Nanotechnology: Implications, Applications, Sustainability",
            "authors": "Barbara Karn",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBY",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Synthesis And Cytotoxic Activity Of Solid Lipid Nanoparticles Containing Docetaxel In Ovarian Carcinoma In Vitro.",
            "authors": "Barbara Yasmin Garcia Andrade;Márcia Cristina Oliveira Rocha;João Paulo Figueró Longo;Sônia Nair Báo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6V",
            "area": "Ecological-nano interactions",
            "type": "POSTER",
            "title": "Perovskite-type KNbO3 modified with quantum dots and graphene for heterogeneous photocatalysis",
            "authors": "Beata Bajorowicz;Joanna Nadolna;Adriana Zaleska-medynska",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS62",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Review of brachytherapy technique in nanoscale",
            "authors": "Beatriz Ribeiro Nogueira;Maria Elisa Chuery Martins Rostelato;Carlos Alberto Zeituni;Cintia Alexandra Tozetti;Andreza A. D. C. C. Gonzalez;José Ronaldo Oliveira Marques;Carla Daruich Souza",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSBC",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Industrial Manufacturing of Vertical Carbon Nanostructures for Energy Storage and Heat Transfer Applications",
            "authors": "Billyde Brown;Craig Green;Baratunde Cola",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYA",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "A triple functional approach to simultaneously determine type, concentration and size of titanium dioxide particles",
            "authors": "Bin Zhao;Lili He",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAS",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Superparamagnetic Magnetie/Chitosan/Co-octacarboxylic acid phthalocyanine composite for electrochemical sensors",
            "authors": "Bruno Brandão Bitarães Neto Salgado Brandão;Henrique Eisi Toma;Henrique Damaceno;Josué Martins Gonçalves;Koiti Araki;Tiago Araujo Matias",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCC",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Magnetite nanoparticles coated with polydopamine for magnetic hyperthermia",
            "authors": "Caio José Perecin;Beatriz Montilha Tirich;Adriano Marim Oliveira;Natália Neto Pereira Cerize;Laudemir Carlos Varanda",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVG6",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Characterization of the addition of silver nanoparticles in thermoplastic elastomer films (TPE)",
            "authors": "Camila Bassetti De Oliveira;Leonardo Guedes Marchini;Duclerc Fernandes Parra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTFE",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Hybrid organic/inorganic devices based on nanomembranes",
            "authors": "Carlos César Bof Bufon",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6K",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Biodegradation of graphene oxide-polymer nanocomposite films in water",
            "authors": "Carlos David Grande Tovar;Jingjing Fan;Debora Frigi Rodrigues",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCV",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Bovine plasma protein corona associated with multiwalled carbon nanotubes: characterization, long-term water dispersion and ecotoxicity",
            "authors": "Carlos Henrique Zanini Martins;Tatiani Brenelli Lima;Fabio Cesar Gozzo;Jefferson Bettini;Rodrigo Villares Portugal;Gisela Aragão Umbuzeiro;Oswaldo Luiz Alves;Diego Stefani Teodoro Martinez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BV4P",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Obtaining Nanodiamonds from Diamonds CVD by Ultrasonic Cavitation in Different Solvents",
            "authors": "Carolina Ramos Hurtado Guimarães;Cristiane Costa Wachesk;Alexandre Martins Santos;Vladimir Jesus Trava-airoldi;Dayane Batista Tada",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMM",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Nose-to-brain delivery of insulin enhanced by radiation-engineered nanogels",
            "authors": "Clelia Dispenza",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVE4",
            "area": "Nanoinformatics and Modeling",
            "type": "ORAL",
            "title": "Plasmonic properties of multilayer Albumin/gold hybrid Nanoparticles ",
            "authors": "Constanza Y. Flores;Estefania Achilli;L. Joaquin Mendoza Herrera;Daniel Carlos Schinca;Mariano Grasselli",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAF",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "STUDY THE EFFECT OF HIGH ENERGY MILLING OF DIAMOND CVD",
            "authors": "Cristiane Costa Wachesk;Carolina Ramos Hurtado Guimarães;Patricia Marcondes Dos Santos;Dayane Batista Tada;Getulio De Vasconcelos;Jesus Manuel Gutierrez Bernal;Vladimir Jesus Trava-airoldi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZZ",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Effects of soluble copper and copper oxide nanoparticle exposure on the immune system of mussels",
            "authors": "Cristina Del Carmen Torres Duarte;James D. Moore;Gary Neil Cherr",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDK",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Neurotoxicity induced by administration of mesoporous silica nanoparticles as neuropharmacological carriers.",
            "authors": "Daiane Guedes Domingues;Antoninho Teixeira Júnior;Alexandre Ehrhardt",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDM",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Use of nanocarriers as maximizers of the antineoplastic cytotoxic effect of 13-cis-retinoic acid",
            "authors": "Daiane Guedes Domingues;Antoninho Teixeira Júnior;Alexandre Ehrhardt",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSQW",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "On the microtubule-gold nanoparticle interaction",
            "authors": "Daniel Oliveira;Jorge Da Silva Shinohara;Henrique Eisi Toma",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTKM",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Processing of Magnesium and Titanium-based Nanomaterials for Hydrogen Storage",
            "authors": "Daniel Rodrigo Leiva;Ricardo Floriano;Guilherme Zepon;Ricardo Mendes Leal Neto;Tomaz Toshimi Ishikawa;Walter José Botta",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSSP",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "ANTIFUNGAL EFFECTS OF NANOPARTICLES: GRAPHENE, GRAPHENE OXIDE, MOLYBDENUM TRIOXIDE (h and α)",
            "authors": "Debora Rodrigues",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTH",
            "area": "Nanoinformatics and Modeling",
            "type": "ORAL",
            "title": "Mechanical Response of Nanoporous Metals",
            "authors": "Diana Farkas",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCH",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "TL and OSL properties of artificial nanocrystals of quartz polymorph obtained via sol-gel and its applicability to environmental ionizing radiation dosimetry ",
            "authors": "Diego Renan Giglioti Tudela;Sonia Tatumi Tatumi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRSK",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "The applications of nanomaterials in advanced oxidation processes to remove organic contaminants",
            "authors": "Dionysios Demetriou Dionysiou",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS42",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Injection Molded Micro-fluidic Device for Synthesizing Liposome in Nanoscale",
            "authors": "Doosun Choi;Sang-won Woo;Jin-hwan Kim;Han-bit Lee;Jae-sung Yoon;Kee-sung Kim;Yeong-eun Yoo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTD2",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Production of noble metal nanoparticles by gas aggregation method",
            "authors": "Douglas Arnold Silveira Gioielli Santos;Antonio Domingues Dos Santos;Valquiria Fernanda Gonçalves De Lima;Sergio Antonio Romero",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZF",
            "area": "Ecological-nano interactions",
            "type": "POSTER",
            "title": "Nanosize fractions of plastic contamination in urban waters and their implication in ecological systems",
            "authors": "Dounia El Khatib;Gang Wang;Vinka Craver",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRS6",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Alterations of Gene and Protein Expressions of Escherichia coli Exposed to Carbon Nanotubes",
            "authors": "Eakalak Khan",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYM",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Morphology of nanostructured thin films of ZnO fabricate from SILAR method  ",
            "authors": "Eguiberto Galego;Marilene Morelli Serna;Lalgudi Venkataraman Ramanathan;Rubens Nunes Faria Jr.",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZX",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Synthesis of cerium oxide nanopowders for improving catalysts electroactivity in direct ethanol fuel cells",
            "authors": "Elaine Farneze De Camargo;Guilherme Cordeiro;Monique Carolina Lima Santos;Conrado De Vascancellos Pereira;Valter Ussui;Nelson Batista De Lima;Almir Oliveira Neto;Dolores Ribeiro Ricci Lazar",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2X",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Tumor-Penetrating Aerosol Nanocomposite Microparticles for the Treatment of Lung Cancer",
            "authors": "Elisa Angela Torrico Guzmán;Qihua Sun;Celia Dunn;Jake Morris;Samantha Meenach",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRXG",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Nano-augmented Microwave Irradiation of Soils Containing Heavy and Long-Chain Petroleum-Hydrocarbons: A Rotating Reactor Pilot Design",
            "authors": "Emmy Lea Pruitt;Onur G Apul;Roopa Kamath;Kitty Kong;Paul Dahlen;Paul Westerhoff",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMD",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "SYNTHESIS AND CHARACTERIZATION OF EVA/CLAY FLEXIBLE FILMS TREATED BY ELECTRON BEAM RADIATION",
            "authors": "Esperidiana B. Moura;Aline M. Lodis;Marcus Vinicius Seixas;Francisco Rolando Valenzuela Diaz;Olgun Güven",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BT6K",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Development of cellulose-based gels carrying carvacrol or linalool nanoencapsulated in chitosan nanoparticles",
            "authors": "Estefania Vangelie Ramos Campos;Jhones Luiz Oliveira;Patrícia Luiza Freitas Proença;Daniele Ribeiro De Araujo;Leonardo Fernandes Fraceto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAR",
            "area": "Sustainability",
            "type": "POSTER",
            "title": "Natural rubber base nanocomposites structured with mixture of organophilic clays and rice husk ash.",
            "authors": "Fábio Jose Esper;Guillermo Ruperto Martín-cortés;Adriana Almeida Cutrim;Wildor Theodoro Hennies;Francisco Rolando Valenzuela Diaz",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTPH",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Intracellular responses triggered by solid lipid nanoparticles in PC-3 cells: activation of the TGF-ß pathway",
            "authors": "Fernanda Garcia Fóssa;Carolina De Guzzi Cassago;Marcelo Bispo De Jesus",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSPG",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Thermal reduction of graphene oxide nanocomposite using a low temperature HDDR process for supercapacitors",
            "authors": "Fernando Gabriel Benitez Jara;Pedro Vitor Cruz;Gabriel S. Galdino;Julio C. S. Casini;Solange Kazumi Sakata;Rubens Nunes Faria Jr.",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVE6",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Non-metallic conductive inks, paints, and adhesives for making flexible circuitry supported on paper or cloth",
            "authors": "Fernando Galembeck Galembeck;Bruno C Batista;Ramon Dos Santos;Pompeu Abreu-filho;Jeferson Santos;Elisa Ferreira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCM",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Immobilization of graphene oxide in a poly(divinylbenzene) matrix for the treatment of liquid radioactive waste containing 137Cs",
            "authors": "Fernando Mendes De Oliveira;Ademar J. Potiens Jr;José Luiz Fejfar;Debora Frigui Rodrigues;Daniel Rossado Oliveira;Patricia Busko Di Vitta;Solange Kazumi Sakata",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTPD",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Multimodal Correlative Microscopy od 2D Materials",
            "authors": "Fernando Vargas",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBH",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "?Synthesis and Characterization of superparamagnetic magnetite-silica core-shell nanoparticles",
            "authors": "Francine Ramos Scheffer;Karim Bouchmella;Mateus Borba Cardoso",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSRE",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Characterization of Advanced Materials by means of Aberration Corrected Transmission Electron Microscopy ",
            "authors": "Francisco Carlos Robles Hernandez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSPK",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Electron beam irradiationof reduced graphene oxide-palladium nanocomposite for electrochemical supercapacitor",
            "authors": "Gabriel S. Galdino;Luiza Ferreira Sobrinho;Pedro Vitor Cruz;Julio C. S. Casini;Solange Kazumi Sakata;Rubens Nunes Faria Jr.",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCP",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Studying the toxicity of copper nanoparticles to Danio rerio embryos",
            "authors": "Gabriela Helena Da Silva;Romana Petry;Aline Maria Zigiotto De Medeiros;Latif Khan;Regina Teresa Rosim Monteiro;Diego Stefani Teodoro Martinez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTME",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "THE IMPACT OF PHYSICAL-CHEMICAL PARAMETERS OVER THE FORMATION OF PAPAIN NANOPARTICLES CROSSLINKED BY RADIATION",
            "authors": "Gabriela Nemesio Fazolin;Gustavo H C Varca;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBA",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Electroxidation of phenylmethanol using nanostructured NiCe HDL as electrocatalysts",
            "authors": "Geovanne Lemos De Assis;Josué Martins Gonçalves;Juliana Da Silva Bernardes;Koiti Araki",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTJ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Zero and One-Dimensional Structures Based in ZnO and Biomedical Engineering Applications",
            "authors": "Glécia Virgolino Da Silva Luz;Lourdes Mattos Brasil;Fernanda Feitosa De Souza Oliveira;Wagner Moreira Pinheiro;Leandro Xavier Cardoso",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBN",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "CERAMIC MATERIALS AS CORROSION PROTECTIVE AGENTS FOR URETHANIC FILMS ON STEEL ABNT 1020 FOSPHOTATED",
            "authors": "Gonçalo Siqueira;Hélio Wiebeck;Leonardo Gondim De Andrade;Silva;José Mauro Diniz Oliveira;Rocío Del Pilar Bendezú Hernandez;Fábio Jose Esper",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVF4",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "In vitro safety evaluation of multi-walled carbon nanotubes functionalized with polyethylene glycol in V79-4 cell line",
            "authors": "Graziela De Paula Ferreira Dantas;Lívia Santos Gomides;Estefânia Mara Do Nascimento Martins;Júlia Barros Gomes;Clascídia A. Furtado;Adelina Pinheiro Santos;Carlos Alberto Tagliati",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRY4",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Engineering graphene surface toward design of aggregation-resistant catalyst supports for advanced energy conversion",
            "authors": "Guilherme Cordeiro;Elaine Farneze De Camargo;Valter Ussui;Nelson Batista De Lima;Almir Oliveira Neto;Dolores Ribeiro Ricci Lazar",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSX6",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Decoupled Hierarchical Structures for Suppression of Leidenfrost Phenomenon",
            "authors": "Hadi Ghasemi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSXB",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Toward extreme anti-icing surfaces",
            "authors": "Hadi Ghasemi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRXC",
            "area": "Ecological-nano interactions",
            "type": "POSTER",
            "title": "Characterizing the molecular mechanisms for the uptake of cerium oxide nanoparticles by soybean (Glycine max. (L.) Merr.)",
            "authors": "Hamidreza Sharifan;Xingmao Ma",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTQ",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Surface Chemistry and Trap States of Germanium Quantum Dot Thin films",
            "authors": "Heather Renee Sully;Riley Rutan;Kaitlin Hellier;Kathryn Ann Newton;Frank G Bridges;Susan Kauzlarich;Sue Carter",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRJM",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Combined metal nanoparticles-functionalized membrane technology for toxic organic degradation",
            "authors": "Hongyi Wan; Nicolas Briot; Anthony Saad; Lindell Ormsbee;Dibakar Bhattacharyya",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTT2",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "X-ray fluorescence uncovering the interaction of CuO nanoparticles on Phaseolus vulgaris seeds",
            "authors": "Hudson W.p Carvalho;Eduardo De Almeida;Nádia Marion Duran",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYD",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Title Global Health Impacts of Nanotechnology Law: The Legend of Asbestos That Haunts Nanotechnology Innovations",
            "authors": "Ilise Feitshans Feitshans",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYF",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Immobilization of Casein-Coated Silver Nanoparticles on Cellulose Acetate Membranes for Biofouling Control",
            "authors": "Isabel Cristina Escobar;Conor Sprick;Sneha Chede;Vinka Craver",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAH",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Characterization of iron oxide nanoparticles with chitosan and ascorbic acid obtained by the co-precipitation method.",
            "authors": "Isabella Lourenço Lourenço;Milena T. Pelegrino;Isabelle De Souza Campos;Paula S. Haddad;Fanny Nascimento Costa;Amedea Barozzi Seabra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAQ",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Nanfabrication of particles with tailored magnetic properties for biomedical applications using nanoimprint lithography.",
            "authors": "Ivan Nekrashevich;Mohammad Khodadadi;Chang Long;Dmitri Litvinov",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAM",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Internalization and cytotoxicity of TAT peptide functionalized rivastigmine nanoparticles in stem cells",
            "authors": "Izabella Ferreira Campos;Lys Hamond R Mangia;Jasmin .;Rosalia Mendez Otero;Helen Conceição Ferraz;José Carlos Pinto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAK",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Polymeric nanoparticles for drug delivery: bio-distribution after intravenous injection",
            "authors": "Izabella Ferreira Campos;Melissa Florence Marques;Claudia Pinto Figueiredo;Helen Conceição Ferraz;José Carlos Pinto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBV",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "PVMMA/castor oil nanocapsules loaded with doxorubicin: Development and evaluation of cytotoxicity in cancer cells",
            "authors": "Janaina Moreira Coelho;Níchollas Serafim Camargo;Rayane Ganassin;Luis Alexandre Muehlmann",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYB",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Biodegradation and stability effect in PSU nanocomposites adding rGO nanosheets",
            "authors": "Janire Peña Bahamonde;Verónica San Miguel;Juan Carlos Cabanelas;Debora Frigui Rodrigues",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTDF",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Characterization by atomic force microscope (AFM) of graphene oxide and graphene oxide-PEGNH2 incorporated in bovine pericardium ",
            "authors": "Jaqueline Jamara Souza Soares;Carlos Alberto Costa;Raynara Maria Silva Jacovone;Marcio Henrique Zaim;Solange Kazumi Sakata",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTDE",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "The effect of GO-PEGNH2 on the mechanical resistance of bovine pericardium used in cardiovascular ",
            "authors": "Jaqueline Jamara Souza Soares;Raynara Maria Silva Jacovone;Monica Beatriz Mathor;Marcio Henrique Zaim;Marina Junko Shiotsu Maizato;Solange Kazumi Sakata;Idágene Aparecida Cestari;Fábio Biscegli Jatene",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTWT",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Palladium-copper supported on reduced graphene oxide: Simple synthesis and their application for NOx reduction",
            "authors": "Jéssica Rabelo Do Nascimento;Monique Ribeiro D'oliveira;Carlos Alberto Chagas;Martin Schmal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BT6N",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Zein nanoparticles for pest control in sustainable agriculture: the encapsulation of citronella oil compounds",
            "authors": "Jhones Luiz Oliveira;Estefania Vangelie Ramos Campos;Anderson Espirito Santo Pereira;Tatiane Pasquoto;Renata De Lima;Leonardo Fernandes Fraceto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTNN",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Magnetically aligned graphene for display and broader device applications",
            "authors": "Jiming Bao",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAT",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "In-situ study of cellular discharge in S. aureus during photocatalytic inactivation",
            "authors": "Jing-hua Tzeng",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2R",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Influence of Li+ modification on Tm3+-TiO2 photocatalytic activity  under visible light irradiation",
            "authors": "Joanna Nadolna;Pawel Mazierski;Adriana Zaleska-medynska",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTB6",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Characterization of Polyelectrolyte Membranes with in-situ Metal-Oxide Nanoparticles and Transport Properties",
            "authors": "Jonathan Colon Colon;John M. Landers;Aleksey Vishnyakov;Alexander V. Neimark",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAG",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Synthesis of High Stable Gold (198) Nanoparticles for Radiotherapy",
            "authors": "Jonnatan Julival Santos;Jessica Leal;Luis Alberto Pereira Dias;Sergio Hiroshi Toma;Paola Corio;Koiti Araki;Frederico Genezini;Kattesh V Katti;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMS",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "EVALUATION OF THE IN VITRO AND IN VIVO TOXICITY OF GOLD NANOPARTICLES SYNTHESIZED BY GREEN NANOTECHNOLOGY",
            "authors": "Jorge Gabriel Dos Santos Batista;Janaina A.g. Barros;Gustavo H C Varca;Sizue Ota Rogero;Adriana Kuchinski Cavalcante;Fernanda Carolina Mamede;José Rogero;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTG2",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "From Gold Phytomining to the Fate of Nanoparticles in Terrestrial Plants:  Synchrotron-based Studies",
            "authors": "Jorge L. Gardea-torresdey",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2G",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Impacts and Characteristics of Ferrate Resultant Particles in Water Treatment ",
            "authors": "Joseph Goodwill Goodwill;Kaoru Ikuma;David Reckhow;Joseph Gikonyo;Yanjun Jiang;Josh Cunningham;Xuyen Mai;John Tobiason Tobiason",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4Z",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Effects on Clay addition on properties of LDPE flexible films",
            "authors": "Julyana Galvão Santana;Marcus V. S. Seixas;Mariana M. Arantes;Olgun Güven;Esperidiana B. Moura",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBQ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Synthesis, characterization and biological application of photosensitizer loaded magnetic nanoemulsion",
            "authors": "Karen Rapp Py-daniel;Sergio Enrique Moya;Ricardo Bentes De Azevedo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAT",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Gold Nanoparticlessynthetized withAminolevulinic Acid forTheranostic: Photodynamic and Sonodynamic Therapies",
            "authors": "Karina De Oliveira Gonçalves;Letícia Bonfim;Daniel Perez Vieira;Lilia Coronato Courrol",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVAA",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Gold Nanoparticles synthetized with Aminolevulinic Acid for Theranostic: Photodynamic and Sonodynamic Therapies",
            "authors": "Karina De Oliveira Gonçalves;Letícia Bonfim;Daniel Perez Vieira;Lilia Coronato Courrol",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBG",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Evaluation  Cytotoxicity Photodynamic Therapy Mediated by Nanoemulsion of Açai Oil Against Non Melanoma Skin Cancer",
            "authors": "Khellida Loiane Vieira Ramos Rocha;Claudio Eduardo Cavalcanti;Ricardo Bentes De Azevedo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBE",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Antitumoral evaluation of photodynamic therapy mediated by Selol nanocapsules and by nanoemulsion  Phthalocyanine against breast cancer",
            "authors": "Khellida Loiane Vieira Ramos Rocha;Graziella A. Joanitti;Alicia Ombredane;Ricardo Bentes De Azevedo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSPM",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Tissue elastography using “nanobombs”",
            "authors": "Kirill Larin",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVEC",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Multifunctionalized nanoparticles for biomedical applications",
            "authors": "Koiti Araki",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTRY",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Protein corona evaluation of magneto-luminescent nanoprobe of Fe3O4 with engineered surface chemistry by calixarene and Eu3+ TTA complex",
            "authors": "Latif Ullah Khan;Romana Petry;Diego Stefani Teodoro Martinez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTJX",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Nanomembrane-based transport junctions for integrated molecular electronics",
            "authors": "Leandro Merces;Rafael Furlan De Oliveira;Davi Henrique Starnini De Camargo;Carlos César Bof Bufon",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTV",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Nanomedicine for targeted photobiological processes as an innovative therapeutic strategy in the treatment of brain tumors",
            "authors": "Leonardo Barcelos De Paula;Maryanne Trafani De Melo;Antonio Claudio Tedesco",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTHQ",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Nanotechnology and botanical insecticides towards a sustainable agriculture",
            "authors": "Leonardo Fernandes Fraceto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCN",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Incorporation of silver nanoparticles by the radiation process in Central Venous Catheter (CVC) of polyurethane coated with titanium oxide for antimicrobial activity",
            "authors": "Leonardo Gondim De Andrade;Silva;Patricia Freitas;Thiago Lewis Reis Hewer",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBP",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Influence of oxidation process in the stability of nanoemulsions based on buriti oil (Mauritia flexuosa) ",
            "authors": "Leonardo Otávio Silva;Marina Carvalho Sampaio;Ricardo Bentes De Azevedo;Graziella A. Joanitti",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BT6Z",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Iron oxide ferromagnetic nanoparticles functionalized with mPEG-CN and L-Lysine bind efficiently to cells in vitro. ",
            "authors": "Letícia Bonfim;Karina Oliveira Gonçalves;Lilia Coronato Courrol;Daniel Perez Vieira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMC",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Interaction of single and multilayer graphene oxide with fetal bovine serum: impacts on cytotoxicity assessment",
            "authors": "Lidiane Silva Franqui;Antônio Carlos Borges;Marcelo Alexandre De Farias;Rodrigo Villares Portugal;Carlos Alberto Costa;Vitor Rafael Coluci;Adriana Franco Paes Leme;Diego Stefani Teodoro Martinez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRXR",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Biosynthesis of copper nanoparticle by bacterium isolated from copper mine ",
            "authors": "Louise Hase Gracioso;Claudio Augusto Oller Do Nascimento;Elen Aquino Perpetuo;Debora Frigi Rodrigues",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTM",
            "area": "Nanoinformatics and Modeling",
            "type": "ORAL",
            "title": "3D Syringe Nanorobotic Simulator for Zika Virus Biomolecules Detection",
            "authors": "Lourdes Mattos Brasil;Glécia Virgolino Da Silva Luz;Patrycia Barros De Lima Klavdianos;Fábio Vladimir Calixto De Araújo;Roxana Cláudia Iquize Condori;Kleber Vanio Gomes Barros",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2F",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Atrazine removal from contaminated waters with zero-valent copper particles",
            "authors": "Luana Rabelo Hollanda;Cátia Alexandra Graça;Osvaldo Chiavone-filho;Antonio Carlos Silva Costa Teixeira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMF",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Ablation of melanomas with phthalocyanines-gold nanorods complexes for PTT and PDT: histologic and macroscopic results",
            "authors": "Lucas Freitas De Freitas;Anderson Orzari Ribeiro;Michael Hamblin;Ana Maria De Guzzi Plepis",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDY",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Obtaining of Nanochitosan by Physical Process",
            "authors": "Luciana De Souza Neves Ellendersen;Helton José Alves;Mabel K. Arantes;Graciela Ines Bolzon Muñiz",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTXN",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Photoreduction of cytochrome c by nanostructured zinc oxide and hematite using simulated sunlight.",
            "authors": "Lucivaldo Dos Reis Menezes;Fernanda Yumi Suenaga;Juliana Casares Araujo-chaves;Iseli Lourenço Nantes-cardoso",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BV2Q",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Nanostructured lipid carriers with antitumor action: potential application to cancer treatment",
            "authors": "Ludmilla David De Moura;Lígia Nunes De Moraes Ribeiro;Gustavo Henrique Rodrigues Da Silva;Eneida De Paula",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCZ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Nanoparticles for anticancer photodynamic therapy: Development, in vitro activity and biodistribution studies",
            "authors": "Ludmilla David De Moura;Níchollas Serafim Camargo;Ana Luísa Gouvêa Silva;Mayara Simonelly Dos Santos;Ricardo Bentes De Azevedo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTTJ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "BIOGENIC SILVER NANOPARTICLES INDUCE HEPATIC TOXICITY AND OXIDATIVE STRESS IN MALE WISTAR RATS",
            "authors": "Luiz Alberto Bandeira Ferreira;Monique Culturato Padilha Mendonça;Ângela Giovana Batista;Emanueli Do Nascimento Da Silva;Mario Roberto Maróstica Junior;Maria Alice Cruz-hofling;Solange Cadore;Nelson Durán;Marcelo Bispo De Jesus",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVEW",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Synthesis of ZnO for biocide activity on SEBS/PP applications",
            "authors": "Luiz Gustavo Hiroki Komatsu;Washington Luiz Oliani;Vijay K. Rangari;Duclerc Fernandes Parra;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVGE",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Converging nanobiotechnologies and impact on biomedical applications",
            "authors": "Luiz Ricardo Goulart",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTKK",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "The study of chemical and physical properties of Polyaniline-Graphene Oxide and Palladium Polyaniline-Graphene Oxide composites",
            "authors": "Luiza Ferreira Sobrinho; Paula Tiemi Goto; Rafael H L Garcia; Daniel Francisco; Lúcio Angnes; Solange Kazumi Sakata",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVAY",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Obtaining of a hydrogel gel dressing of PVP with nanosilver for deep and complex wounds",
            "authors": "Mara Tânia Silva Alcântara;Camila Mariana Coutinho;Maria José Alves Oliveira;Mara Mello Leite Munhoz;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVGX",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Solid lipid nanoparticles relies on endosomal acidification for intracellular DNA release in HEK239T cells",
            "authors": "Marcelo Bispo De Jesus;Allan Radaic",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSGT",
            "area": "Nanoinformatics and Modeling",
            "type": "ORAL",
            "title": "Experimental Study of Radiation Influence onThermophysical Properties of Al2O3 and ZrO2 Nanofluids",
            "authors": "Marcelo Da Silva Rocha;Priscila Gomes Ferreira Pinho;Fábio Branco Vaz;Delvonei Alves Andrade",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVEE",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Functionalized-radiolabeled Tenorite/Hydroxyapatite nanoparticles as theranostic agent for osteosarcoma: synthesis, characterization and biological in vitro assays",
            "authors": "Marcelo Fernandes Cipreste;Anderson Maia Peres;Marcelo Coutinho De Miranda;Dawidson Assis Gomes;Veronica De Carvalho Teixeira;Waldemar Augusto De Almeida Macedo;Edésia Martins Barros De Sousa",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2K",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Toxicity Of Binary Mixture Of AgNPs And TiO2NPs, Nanoparticles Alone And Silver-Doped TiO2NPs",
            "authors": "Marcin Kruszewski;Sylwia Meczynska-wielgosz;Maria Wojewodzka;Anna Kedziora;Lucyna Kapka-skrzypczak",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTTM",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "In Vivo Comparison of Zinc Foliar Absorption Applied as Sulphate and Oxide in Soybean",
            "authors": "Marcos Henrique Feresin Gomes;Eduardo De Almeida;Rafael Otto;Hudson W.p Carvalho",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4Y",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Preparation and Characterization of Nanocellulose from Sugarcane bagasse ",
            "authors": "Marcus Vinicius Seixas;Esperidiana Barretos Moura;Vijay K. Rangari;Hélio Wiebeck",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2N",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Modified Ta2O5 nanotubes for photocatalytic application",
            "authors": "Marek Piotr Kobylanski;Mateusz Adam Baluk;Pawel Mazierski;Adriana Zaleska-medynska",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDP",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Synthesis and Characterization of TiO2 Films Obtained by Sol-Gel Method",
            "authors": "Margarida Szurkalo;Eduardo Cesar De Oliveira;Olandir Vercino Correa;Rodrigo Teixeira Bento;Marina Fuser Pillis",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BV4E",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Incorporation of tetracycline in bentonite aiming it use as drug carrier",
            "authors": "Margarita Bobadilla Gaviria;Maria Das Graças Da Silva Valenzuela;Francisco Rolando Valenzuela Diaz",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6C",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Reverse micelles as nanoreactors applied to controled synthesis of gold nanoparticles with antimicrobial activity",
            "authors": "María Alejandra Guerrero;Claudia Cristina Ortiz;John Jairo Castillo;Jennifer Ruiz;Jorge Andres Gutierrez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTK6",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Functionalization-induced changes in the carbon nanofiber structure via ionizing radiation using vinyl monomers",
            "authors": "Maria Cecilia Conceição Evora;Xinyi Lu;Nam-goo Kang;Kunlun Hong;Roberto Uribe;Leonardo Gondim De Andrade;Silva;Carla Lake;Jimmy Mays",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTDM",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "?Preparation of luminescent Nd2(MoO4)3 amino-functionalized silica nanoparticles for bioconjugation",
            "authors": "Maria Claudia França Da Cunha Felinto;Clarissa Lombardi Dias;Leonardo H. C. Francisco;Everton Bonturim;Helliomar Pereira Barbosa;Hermi Felinto Brito;Oscar Loureiro Malta;Ercules Teotonio",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTDN",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Rare earth compounds as smart materials to biological application",
            "authors": "Maria Claudia França Da Cunha Felinto;Francine Franzotti Da Silva Salvador;Leonardo H. C. Francisco;Everton Bonturim;Hermi Felinto Brito;Oscar Loureiro Malta;Ercules Teotonio",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS64",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Nanobrachytherapy and its challenges",
            "authors": "Maria Elisa Chuery Martins Rostelato;Carla Daruich Souza;Andreza A. D. C. C. Gonzalez;Beatriz Ribeiro Nogueira;Carlos Alberto Zeituni;Marc-andré Fortin;Pascalle Chevallier",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCS",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Hydrogels with silver nanoparticles for wound treatment",
            "authors": "Maria José Alves Oliveira;Jonnatan Julival Santos;Sergio Hiroshi Toma;Mara Tânia Silva Alcântara;Pablo Antonio Vázquez Salvador;Koiti Araki;Ademar Benévolo Lugão",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCT",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Nebulizabled archaeolipid nanovesicles: azithromycin incorporation and interaction with pulmonary surfactant",
            "authors": "María Julia Altube;Andrea Cutro;Federico Parra;María Jose Morilla;Edgardo Anibal Disalvo;Eder Lilia Romero",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTKG",
            "area": "Sustainability",
            "type": "POSTER",
            "title": "Characterization of Mining Waste as Nanomaterial",
            "authors": "Maria Lucia Pereira Antunes;Antônio Hortêncio Munhoz Jr.;Carime Dos Santos Souza;Guillermo Rafael Beltran Navarro;Fabiano Tomazini Conceição",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVFB",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Synthesis and characterization of silver nanoparticles functionalized with TEGDMA",
            "authors": "Mariana De Jesus Santos;Tamiris Martins Ribeiro Dos Santos;Luiza Mello De Paiva Campos;Camila Bassetti Oliveira;Duclerc Fernandes Parra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBF",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Performance of sulfidated nano zerovalent iron nanoparticles for the remediation of arsenic contaminated sites",
            "authors": "Mariana Umpierrez;Subhasis Ghoshal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYP",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Green synthesis of ZnO nanostructured electrode for supercapacitor.",
            "authors": "Marilene Morelli Serna;Eguiberto Galego;Tatiane Yumi Tatei;Bruna Rodrigues Lima;Rubens Nunes Faria Jr.",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSRZ",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Nanoparticle-surface interactions: implications for nanoscale dust deposition and resuspension",
            "authors": "Marina Eller Vance",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4A",
            "area": "Education",
            "type": "ORAL",
            "title": "An Undergraduate Laboratory Course to Study Nanomaterials from Synthesis through Environmental Impacts",
            "authors": "Mary Jo Kirisits;Navid B Saleh;Michael E Gorman",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTER",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Conductive carbons from cellulose and lignin and its use in flexible paper-based devices",
            "authors": "Mathias Strauss;Ana Claudia Fingolo;Manoella Da Silva Cavalcante;Mariane Peres Pereira;Carlos César Bof Bufon;Murilo Santhiago",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDX",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Radiation synthesis of metal oxide nanoparticles",
            "authors": "Mats Jonsson;Inna Soroka",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTT",
            "area": "Education",
            "type": "ORAL",
            "title": "Industrial revolution or opportunities lost: are we missing out on nano (and high-tech) entrepreneurship?",
            "authors": "Matthew Hull",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4V",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "The Use of Fluorescence Lifetime Imaging Microscopy on Engineered Nanomaterial Induced Changes in Lipid Membranes",
            "authors": "Matthew Sydor;Donald S. Anderson;Harmen B. Steele;J.b. Alexander Ross;Andrij Holian",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTKH",
            "area": "Ecological-nano interactions",
            "type": "POSTER",
            "title": "Adsorption isotherms for the removal of Am-241 in radioactive liquid wastes using magnetite nanoparticles",
            "authors": "Mauricio Tiokazu Oshiro;Solange Kazumi Sakata;Ademar J. Potiens Jr",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6E",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Bioactive acrylic bone cements nanocomposites modified with graphene oxide and chitosan",
            "authors": "Mayra Eliana Valencia Zapata;Jose Herminsul Mina;Hector Fabio Zuluaga;Carlos David Grande Tovar;Blanca Vázquez Lasa;Julio San Roman;Luis Rojo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBC",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Ultradonut topology of the nuclear envelope",
            "authors": "Mehdi Torbati;Tanmay P. Lele;Ashutosh Agrawal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBB",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Chitosan nanoparticles for nitric oxide delivery in the skin",
            "authors": "Milena Trevisan Pelegrino;Letícia C Silva;Tiago Rodrigues;Richard Weller;Amedea Barozzi Seabra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSBA",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Nanoscale Iron Triggers Iron Uptake in Lettuce (Lactuca sativa) through LsHA2 Gene Regulation",
            "authors": "Mohammad E Hossain;Robert S Brueggeman;Achintya N Bezbaruah",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRXH",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Oxidation of methanol on PtRuIn/C in alkaline medium: Effect of metals on the electrocatalytic activity",
            "authors": "Monique Carolina Lima Santos;Almir Oliveira Neto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTW4",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Reduced graphene oxide nanocomposite hydrogels improve functional recovery after peripheral nerve injury",
            "authors": "Monique Culturato Padilha Mendonça;Luciana Politti Cartarozzi;Matheus Perez;Tiago Branco Becher;Catia Ornelas;Alexandre Leite Rodrigues De Oliveira;Marcelo Bispo De Jesus",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTDA",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Development, characterization and toxicological evaluation of Rivaroxaban PLGA-nanoparticles for thrombosis treatment",
            "authors": "Monique Etnea Machado;Maria Clara Macêdo Pinheiro;Flávia Almada Do Carmo;Marcela Cristina De Moraes;Luiz Claudio Rodrigues Pereira Da Silva;Lucio Mendes Cabral;Plínio Cunha Sathler",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTWV",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Synthesis of graphene by graphite oxidation using an improved Hummers method",
            "authors": "Monique Ribeiro D'oliveira;Jéssica Rabelo Do Nascimento;Martin Schmal;Carlos Alberto Chagas",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAC",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Photocatalytic activity of ZnO NP obtained by controlled precipitation: Effect of precursor and synthesis temperature",
            "authors": "Morgana De Medeiros Machado;Cesar Augusto Jaramillo-paez;José Antonio Navío;Adriano Michael Bernardin",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAZ",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Poloxamer-cellulose derivatives thermosensitive hydrogels as delivery systems for the local anesthetic ropivacaine ",
            "authors": "Naially Cardoso De Faria;Samyr Machado Querobino;Eneida De Paula;Daniele Ribeiro De Araujo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTY",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Decomposition of Perfluorooctane Sulfonate by Nanoscale Zerovalent Iron Associated with Persulfate/Hydrogen Peroxide",
            "authors": "Naomi Gevaerd De Souza;Akshay Chandrashekan Parenky;Hyeok Choi",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBW",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Nanostructured mixed Ni/Pt hydroxides electrodes for amperometric determination of hydralazine",
            "authors": "Nathália Florencia Barros Azeredo;Pamela De Oliveira Rossini;Josué Martins Gonçalves;Geovanne De Assis;Koiti Araki;Lúcio Angnes",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSBD",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Dual-Mode Investigation of Multifunctional Iron-oxide@NaGdF4:xCe3+,xTb3+,yDy3+ oval Nanoparticles",
            "authors": "Navadeep Shrivastava;Uéslen Rocha Silva;Diego Muraca;Carlos Jacinto Da Silva;Hermi Felinto Brito;Alan Silva De Menezes;Surender Kumar Sharma",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTA6",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Nanotechnology Policy in Brazil: advances and challenges",
            "authors": "Noela Invernizzi;Guillermo Foladori;Josemari Quevedo",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCB",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Nanoarchitectures of Plentiful Materials for Solar Photocatalytic Fuel Generation",
            "authors": "Oomman K Varghese;Ram Neupane;Maggie Paulose",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAH",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Engineering photocatalytic cements for efficient water treatment: How formulation affects performance ",
            "authors": "Pamela Zuniga;Jaime Francisco Quesada;Pedro José Alvarez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTB2",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Development of multifunctional nanocomposite coating for indirect potable reuse water treatment",
            "authors": "Pasan Chinthana Bandara;Debora Rodrigues;Enrico Nadres",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTCQ",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Study of combined light stabilizers systems (organics and nanoparticles) applied in polyethylene films",
            "authors": "Patricia Negrini Siqueira Poveda;Leonardo Gondim De Andrade;Silva",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2Z",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Synthesis and physicochemical characterization of ZnO quantum dots and its use in the biosensors development",
            "authors": "Paula Andrea Uribe;Claudia Cristina Ortiz;John Jairo Castillo;Sergio Ismael Blanco;Jorge Andres Gutierrez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2D",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Morphology-dependent photocatalytic hydrogen generation of GdVO4 nanostructures prepared by hydrothermal reaction",
            "authors": "Pawel Mazierski;Joanna Nadolna;Adriana Zaleska-medynska",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAX",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Barrier properties of Polyethylene/Poly(vinyl alcohol) films containing silica and carbon black",
            "authors": "Pedro Henrique Vieira;Alberto Claudio Habert;Jane Hitomi Fujiyama-novak;Helen Conceição Ferraz",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS6W",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Developing Versatility in a Peltier Thermoelectric Device",
            "authors": "Peter Zhao;Michael Scimeca;Ayaskanta Sahu",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRYH",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Behavior of polysulfone nanocomposite filtration membranes under hypochlorite ageing",
            "authors": "Priscila Anadão Anadão;Hélio Wiebeck",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSGG",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Barley-Engineered Nanoparticle-Phytopathogen Interactions: Induced Physiological Reprogramming of Innate Immunity",
            "authors": "Priyanka Deka;Roshan Sharma Poudel;Shyam Solanki;Chrysafis Voriatzis;Achintya N Bezbaruah;Robert S Brueggeman",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRKJ",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "The smart design of graphitic carbon nitride for photocatalytic water treatment with visible light irradiation",
            "authors": "Qinmin Zheng",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BNQW",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Nanotechnology based sustainable and precision agriculture: A systematic understanding of nanoparticle synthesis and its interaction with plants",
            "authors": "Ramesh Raliya;Pratim Biswas",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAZ",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "CO2 facilitated transport through membranes containing amino-functionalized inorganic particles",
            "authors": "Raquel Greice Alfaya;Alberto Claudio Habert;Helen Conceição Ferraz",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDH",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "DELIVERY OF 5-FLUOROURACIL TO CANCER CELLS BY GOLD NANOPARTICLES FUNCTIONALIZED WITH ANTIBODIES FOR HUMAN EPIDERMAL GROWTH FACTOR RECEPTORS ",
            "authors": "Raquel Liszbinski Liszbinski;Flávia Sardela De Miranda;Carolina Mendonça Gorgulho;Graziela Gorete Romagnoli;Caroline Rodrigues Basso;Ramon Kaneno",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAN",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Polymeric nanoparticles functionalization using EDC carbodiimide and Maleimide",
            "authors": "Rayany Stôcco Braido;Débora Vieira Way;Izabella Ferreira Campos;Helen Conceição Ferraz;José Carlos Pinto",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTKC",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Antimicrobial activity of Graphene Oxide/Silver nanocomposite obtained by Electron Beam  ",
            "authors": "Raynara Maria Silva Jacovone;Jaqueline Jamara Souza Soares;Thainá Silva;Sousa;Debora Frigi Rodrigues;Flavia Rodrigues De Oliveira Silva;Rafael H L Garcia;Solange Kazumi Sakata",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTZ",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Effects of engineered nanoparticles on plants root diseases and crop health",
            "authors": "Roberto Javier De La Torre-roche;Cristian Plaza-pérez;Chuanxin Ma;Luca Pagano;Sanghamitra Majumdar;Nubia Zuverza-mena;Jason White;Wade Elmer",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVDN",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Characterization and Photocatalytic Behavior of TiO2 Thin Films Grown by MOCVD Process",
            "authors": "Rodrigo Teixeira Bento;Eduardo Cesar De Oliveira;Margarida Szurkalo;Olandir Vercino Correa;Marina Fuser Pillis",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAF",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Techniques of obtaining and physical properties of the graphene",
            "authors": "Rudolf Arthur Triana;Jhon Jairo Olaya",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRKF",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Aqueous stability of black phosphorus: Aggregation and degradation mechanisms of a novel 2-dimensional nanomaterial",
            "authors": "S. Drew Story; Linda M. Guiney; Mark C. Hersam;Sharon L. Walker",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZA",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Development of Nanoparticulates Capable of Penetrating Pulmonary Physiological Barriers ",
            "authors": "Samantha Meenach",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTVP",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Molecular mechanisms of intracellular release of doxorubicin carreated in pH-sensitive and non-sensitive liposomes",
            "authors": "Samara Bonesso Dos Reis;Juliana De Oliveira Silva;André Luís Branco De Barros;Monique Culturato Padilha Mendonça;Marcelo Bispo De Jesus",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAX",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Physico-chemical characterization of voriconazole-mucoadhesive organogels for intravaginal delivery",
            "authors": "Samyr Machado Querobino;Fanny Nascimento Costa;Daniele Ribeiro Araujo;Carlos Alberto-silva",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRV4",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Response of soybean plants to cadmium sulfide quantum dots as a function of surface coating",
            "authors": "Sanghamitra Majumdar;Jason White",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BPJX",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "The interaction of bacterial cells with model graphene oxide surfaces: insights from single-cell force spectroscopy",
            "authors": "Santiago Romero-Vargas Castrillón",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSR4",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Enhanced thermoelectric properties of p-type Mg3Sb2 via co-doping of Na and Zn",
            "authors": "Shuo Chen;Zhensong Ren;Jing Shuai;Jun Mao;Qing Zhu;Shaowei Song",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSAC",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Synthesis of silver nanoparticles into reverse micelles with potential bactericidal activity over Staphylococcus aureus ATCC 9213",
            "authors": "Silvia Juliana Caballero;Claudia Cristina Ortiz;Jennifer Ruiz;Jorge Andres Gutierrez",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVGD",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Sustainable synthesis of transition metals/graphene oxide nanocomposites by electron beam irradiation",
            "authors": "Solange Kazumi Sakata;Luiza Ferreira Sobrinho;Raynara Maria Silva Jacovone;Jaqueline Jamara Souza Soares;Flavio Kiyoshi Tominaga;Lúcio Angnes;Rafael H L Garcia",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBZ",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "TL and OSL properties of strontium aluminate nanocrystals applied to ionizing radiation dosimetry ",
            "authors": "Sonia Tatumi Tatumi;Tainara Caroline Rocha;Alvaro De Farias Soares;Diego Renan Giglioti Tudela;Kátia Alessandra Gonçalves",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRRA",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Formation of heterogeneous protein-humic surface coatings on metal oxide nanoparticles",
            "authors": "Stacey M Louie;Sheyda Shakiba",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSPC",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Finite Size Effects – A Guiding Principle for Monolayer Catalysts Synthesis and Design",
            "authors": "Stanko Brankovic",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTC",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Role of surface valence states in nanoceria in modulating ROS and its role in nanomedicine",
            "authors": "Sudipta Seal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRHV",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Influence of organic coating materials for the antibacterial effect of TiO2 nanoparticles",
            "authors": "SungHee Joo;Soyoung Baek",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTRB",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Interaction of ZnO nanoparticles and Common beans (Phaseolus vulgaris) - a synchrotron study",
            "authors": "Susilaine Maira Savassa;Nádia Mairon Duran;Eduardo Santos Rodrigues;Eduardo De Almeida;Hiram Michel-castillo;Hudson W.p Carvalho",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BT6J",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Adsorption study of acid orange 8 dye using silica nanoparticles obtained from sugarcane ash",
            "authors": "Suzimara Rovani;Jonnatan Julival Santos;Paola Corio;Denise Fungaro Fungaro",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTD",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Surfactant mediated synthesis of silica nanoparticles using sugarcane ash waste as renewable source",
            "authors": "Suzimara Rovani;Jonnatan Santos;Paola Corio;Denise Fungaro Fungaro",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTPM",
            "area": "Chemical-nano interactions",
            "type": "ORAL",
            "title": "Photonic and Magnetic Nanoparticles and Nanoscale",
            "authors": "T. Randall Lee",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVF2",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Adsorption and Desorption of chlorhexidine on Montmorillonite Nanoparticles",
            "authors": "Tamiris Martins Ribeiro Dos Santos;Luiza Mello De Paiva Campos;Mariana De Jesus Santos;Duclerc Fernandes Parra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTMX",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "In vivo uptake and speciation of Zn from ZnO nanoparticles in Phaseolus vulgaris plants",
            "authors": "Tatiana Nishida Máximo Da Cruz;Susilaine Maira Savassa;Hudson W.p Carvalho",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTNT",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Metallic and bimetallic iron oxide nanoparticles for potential biomedical vehicles",
            "authors": "Tatiane Nassar Britos;Paula Silvia Haddad Ferreira",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS4C",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Hybrid Additive Process for Coating Patterned and Heterogeneous Thin Films ",
            "authors": "Tequila Harris Harris;Ara Parsekian",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTJM",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Comparison of the synthesis of pseudoboehmite in the presence of acetates and sodium chloride",
            "authors": "Terezinha Jocelen Masson;Antônio Hortêncio Munhoz Jr.;Matheus Francelino Bezerra Da Silva;Alber Luiz Do Nascimento;Leila Figueiredo De Miranda;Denison Angelotti Moraes",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTC6",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "?Evaluation of in vitro cytotoxicity of magnetic nanoparticles with potential to target colorectal cancer",
            "authors": "Thais Da Silva Correa;Danilo Roberto Carvalho Ferreira;Amanda Elord Costa;Emília Celma De Oliveira Lima;Mariana Campos Da Paz Lopes Galdino",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTP4",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Hardwired for success: Ni supported CeO2:Sm2O3 nanowires as a super stable catalyst for ethanol steam reforming",
            "authors": "Thenner Silva Rodrigues;Arthur Brucoli Leme De Moura;Felipe Anchieta;Silva;Eduardo G. Candido",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBS",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Hardwired for success: Ni supported CeO2-Sm2O3 nanowires as a super stable catalyst for ethanol steam reforming",
            "authors": "Thenner Silva Rodrigues;Arthur Brucoli Leme De Moura;Felipe Anchieta;Silva;Eduardo G. Candido;Vanderlei Sérgio Bergamaschi;João Coutinho Ferreira;Marcelo Linardi;Fábio Coral Fonseca",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRP2",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Structure Activity Relationships of Engineered Nanomaterials at the Nano-bio Interface",
            "authors": "Tian Xia",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAY",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "A Nano-polymer sensor for ultrasensitive detection of early biomarkers",
            "authors": "Tianfu Wu Wu",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTD6",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Molecular dynamics study of the interface structure and properties in Ti-6Al-4V ",
            "authors": "Tonya W Stone;Robert Escobar;Parshu Bhusal",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSBB",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Nanotechnology for Enhancing Microbial-bio-electrochemical processes for Waste-to-Electricity Generation during Long-term Space Exploration   ",
            "authors": "Venkataramana Gadhamshetty;Namita Shrestha;Shailabh Rauniyar;Abhilash Kumar Tripathi;Rajesh Sani;Zhengrong Gu;James D Hoefelmeyer;Anuradha R Shende;Rajesh V Shende",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTBR",
            "area": "Nanomanufacturing",
            "type": "ORAL",
            "title": "Co-Crystallization of Proteins and Nanocrystals: A Route Towards Nanomaterial Organization",
            "authors": "Vicki Leigh Colvin",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVFE",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Synthesis and characterization of modified electrodes based on Poly(o-ethoxyaniline) and Carbon Nanotubes Composites",
            "authors": "Vinícius Bianchi Soares;Fábio Ruiz Simões;Luís Antonio Polaci",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BVF6",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Synthesis and characterization of silver nanoparticles on clay surface",
            "authors": "Vinicius Juvino Santos;Luiz Gustavo Hiroki Komatsu;Vijay K. Rangari;Duclerc Fernandes Parra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZ2",
            "area": "Ecological-nano interactions",
            "type": "ORAL",
            "title": "Effect of growing conditions on the adaptation of bacteria cultures to nanoparticles exposure",
            "authors": "Vinka Craver",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS2Q",
            "area": "Education",
            "type": "ORAL",
            "title": "Nano Tools course at the University of Rhode Island",
            "authors": "Vinka Craver;Geoffrey Bothun",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTAB",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Biosynthesis and characterization of silver nanoparticles using green tea extract",
            "authors": "Wallace Rosado Rolim;Amedea Barozzi Seabra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRZC",
            "area": "Chemical-nano interactions",
            "type": "POSTER",
            "title": "Measurement of Surface Wettability of Engineered Nanoparticles using Atomic Force Microscope (AFM)",
            "authors": "Wanyi Fu;Wen Zhang",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSRF",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "Spin-Valve Based Magnetoresistive Nanoparticle Detector for Applications in Biosensing ",
            "authors": "Wenlan Qiu;Long Chang;Yu-chi Liang;Julia Litvinov;Jing Guo;Yi-ting Chen;Binh Vu;Katerina Kourentzi;Shoujun Xu;T. Randall Lee;Youli Zu;Richard Willson;Dmitri Litvinov",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BTRS",
            "area": "Biological-nano Interactions",
            "type": "ORAL",
            "title": "The influence of age on biodistribution and biocompatibility of citrate-coated magnetic nanoparticles administered in mice ",
            "authors": "Willie Oliveira Pinheiro;Zulmira Guerrero Marques Lacava;Maria Luiza Fascineli;Marcelo Henrique Sousa;Marcos Célio Almeida;Gabriel Ribeiro Farias;Frederico Hillesheim Hosrt",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRNV",
            "area": "Sustainability",
            "type": "ORAL",
            "title": "Nano-biosensors: From Prototypes to Safer Foods for Consumers",
            "authors": "Wunmi Sadik",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BS44",
            "area": "Nanoinformatics and Modeling",
            "type": "ORAL",
            "title": "Mechanical Factors in Cell-Rotating Nanoparticle Interactions via Computational Modeling",
            "authors": "Xianqiao Wang;Liuyang Zhang",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSB4",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "3D nanoscale imaging of photocatalytic-inactivated S. aureus using transmission X-ray microscopy",
            "authors": "Yao-tung Lin",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSNZ",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "EB irradiation of PVP on theta solution to produce nanogels",
            "authors": "Yasko Kodama;Patrick Severich;Rodrigo Da Costa Dutra",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BV6P",
            "area": "Sustainability",
            "type": "POSTER",
            "title": "Synthesis and application of functionalized iron oxide nanoparticles for the surface oil removal",
            "authors": "Yasmin Luz Fernandes;Débora Selene Cardona;Geórgia Labuto Araújo;Paula S. Haddad",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BSSC",
            "area": "Nanomanufacturing",
            "type": "POSTER",
            "title": "Structural, thermal, magnetic and electrical properties of polyaniline/CoFe2O4 nano-composites with special reference to the dye removal capability",
            "authors": "Yasser Mohammed Al Angari",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTE",
            "area": "Biological-nano Interactions",
            "type": "POSTER",
            "title": "Membrane Disruption Induced by Nanoparticles with Cationic Charge and Protein Corona",
            "authors": "Zehui Xia;April Woods;Ian Burgess;Boris Lau",
            "normalized": 1,
            "link": "0"
        },
        {
            "code": "BRTF",
            "area": "Sustainability",
            "type": "POSTER",
            "title": "Silver nanoparticle removal from spinach leaves using a combination of sodium hypochlorite and ammonium hydroxide ",
            "authors": "Zhiyun Zhang;Lili He",
            "normalized": 1,
            "link": "0"
        }
    ];

    return {
        init:init,
        getByArea:getByArea,
        getByAuthor:getByAuthor,
        getByTitle:getByTitle,
        getPaper:getPaper
    };

})();
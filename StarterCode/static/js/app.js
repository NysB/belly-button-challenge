// Retrieve Samples Data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Could not read file');
})

// 1. Create Bar Chart

// 1.1 Display the default plot

let otu_ids = ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"];
let sample_value = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];
let hover_text = ["Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Gammaproteobacteria", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales", "Bacteria;Proteobacteria;Betaproteobacteria;Neisseriales;Neisseriaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Gemella", "Bacteria;Cyanobacteria;Cyanobacteria;Chloroplast;Streptophyta", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae;Abiotrophia", "Bacteria;Firmicutes;Bacilli", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria;Proteobacteria;Alphaproteobacteria;Caulobacterales;Caulobacteraceae;Phenylobacterium", "Bacteria;Proteobacteria;Alphaproteobacteria;Rhizobiales;Bradyrhizobiaceae", "Bacteria;Bacteroidetes;Flavobacteria;Flavobacteriales;Flavobacteriaceae"]

function init() {
  let data = [{
    x: sample_value,
    y: otu_ids,
    text: hover_text,
    type: "bar",
    orientation: "h"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}

init()

// 1.3 Display updated plot

function updatePlot() {
    let dropdownMenu = d3.select("#selDataset");
    let dataset = dropdownMenu.property("value");

    let x = [];
    let y = [];
    let z = [];

    if (dataset == 'id_940') {
        x = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];
        y = ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"];
        z = ["Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Gammaproteobacteria", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales", "Bacteria;Proteobacteria;Betaproteobacteria;Neisseriales;Neisseriaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Gemella", "Bacteria;Cyanobacteria;Cyanobacteria;Chloroplast;Streptophyta", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae;Abiotrophia", "Bacteria;Firmicutes;Bacilli", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria;Proteobacteria;Alphaproteobacteria;Caulobacterales;Caulobacteraceae;Phenylobacterium", "Bacteria;Proteobacteria;Alphaproteobacteria;Rhizobiales;Bradyrhizobiaceae", "Bacteria;Bacteroidetes;Flavobacteria;Flavobacteriales;Flavobacteriaceae"]
    }
    else if (dataset == 'id_941') {
        x = [194, 178, 162, 92, 84, 40, 37, 28, 27, 24];
        y = ["OTU 2722", "OTU 944", "OTU 2419", "OTU 2539", "OTU 3450", "OTU 1795", "OTU 2389", "OTU 1314", "OTU 922", "OTU 1167"];
        z = ["Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas"]
    }
    else if (dataset == 'id_943') {
        x = [2];
        y = ["OTU 1795"];
        z = ["Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus"]
    }
    else if (dataset == 'id_944') {
        x = [922, 3555, 943, 1013, 1795, 944, 3368, 923, 1770, 3516];
        y = ["OTU 922", "OTU 3555", "OTU 943", "OTU 1013", "OTU 1795", "OTU 944", "OTU 3368", "OTU 923", "OTU 1770", "OTU 3516"];
        z = ["Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Proteobacteria;Gammaproteobacteria;Pseudomonadales;Moraxellaceae;Enhydrobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Micrococcaceae;Kocuria", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales;Comamonadaceae;Pelomonas", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Gemella", "Bacteria;Proteobacteria;Gammaproteobacteria;Oceanospirillales;Oceanospirillaceae;Marinomonas"]
    }
    else if (dataset == 'id_945') {
        x = [944, 1795, 922, 2419, 2859, 943, 2722, 1167, 2651, 1314];
        y = ["OTU 944", "OTU 1795", "OTU 922", "OTU 2419", "OTU 2859", "OTU 943", "OTU 2722", "OTU 1167", "OTU 2651", "OTU 1314"];
        z = ["Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"]
    }
    
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);
    Plotly.restyle("bar", "text", [z]);
}

let dropdownMenu = d3.select("#selDataset");
dropdownMenu.on("change", updatePlot);


// 2. Create Bubble Chart

// 2.1 Display the default plot

let otu_ids_bubble = [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977, 3450, 874, 1959, 2191, 1950, 2077, 2275, 944, 2184, 2244, 2024, 2419, 2811, 165, 2782, 2247, 2011, 2396, 830, 2964, 1795, 2722, 307, 2178, 2908, 1193, 2167, 1208, 2039, 1274, 2739, 2737, 1314, 1962, 2186, 2335, 2936, 907, 833, 2483, 2475, 2491, 2291, 159, 2571, 2350, 2342, 2546, 725, 170, 1505, 513, 259, 1169, 258, 1232, 1497, 1498, 1503, 412, 2235, 1960, 1968, 121, 2065, 340, 2110, 2188, 357, 342];
let sample_value_bubble = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
let label_bubble = ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"]

function createBubble() {
  let data = [{
    x: otu_ids_bubble,
    y: sample_value_bubble,
    text: label_bubble,
    mode: 'markers',
    marker: {
        size: sample_value_bubble,
        color: sample_value_bubble,
        sizemode: "diameter"
    }
  }];

  let layout = {
    xaxis: {
        title: "OTU IDs"},
    yaxis: {
        title: "Sample Values"},
    showlegend: false,
    height: 600,
    width: 800
  };

  Plotly.newPlot("bubble", data, layout);
}

createBubble()

// 2.2 Display updated plot

function updateBubble() {
    let dropdownMenu_bubble = d3.select("#selDataset");
    let dataset_bubble = dropdownMenu.property("value");

    let x = [];
    let y = [];
    let z = [];

    if (dataset == 'id_940') {
        x = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];
        y = ["OTU 1167", "OTU 2859", "OTU 482", "OTU 2264", "OTU 41", "OTU 1189", "OTU 352", "OTU 189", "OTU 2318", "OTU 1977"];
        z = ["Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Gammaproteobacteria", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales", "Bacteria;Proteobacteria;Betaproteobacteria;Neisseriales;Neisseriaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Gemella", "Bacteria;Cyanobacteria;Cyanobacteria;Chloroplast;Streptophyta", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae;Abiotrophia", "Bacteria;Firmicutes;Bacilli", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria;Proteobacteria;Alphaproteobacteria;Caulobacterales;Caulobacteraceae;Phenylobacterium", "Bacteria;Proteobacteria;Alphaproteobacteria;Rhizobiales;Bradyrhizobiaceae", "Bacteria;Bacteroidetes;Flavobacteria;Flavobacteriales;Flavobacteriaceae"]
    }
    else if (dataset == 'id_941') {
        x = [194, 178, 162, 92, 84, 40, 37, 28, 27, 24];
        y = ["OTU 2722", "OTU 944", "OTU 2419", "OTU 2539", "OTU 3450", "OTU 1795", "OTU 2389", "OTU 1314", "OTU 922", "OTU 1167"];
        z = ["Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas"]
    }
    else if (dataset == 'id_943') {
        x = [2];
        y = ["OTU 1795"];
        z = ["Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus"]
    }
    else if (dataset == 'id_944') {
        x = [922, 3555, 943, 1013, 1795, 944, 3368, 923, 1770, 3516];
        y = ["OTU 922", "OTU 3555", "OTU 943", "OTU 1013", "OTU 1795", "OTU 944", "OTU 3368", "OTU 923", "OTU 1770", "OTU 3516"];
        z = ["Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Proteobacteria;Gammaproteobacteria;Pseudomonadales;Moraxellaceae;Enhydrobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Micrococcaceae;Kocuria", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales;Comamonadaceae;Pelomonas", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Gemella", "Bacteria;Proteobacteria;Gammaproteobacteria;Oceanospirillales;Oceanospirillaceae;Marinomonas"]
    }
    else if (dataset == 'id_945') {
        x = [944, 1795, 922, 2419, 2859, 943, 2722, 1167, 2651, 1314];
        y = ["OTU 944", "OTU 1795", "OTU 922", "OTU 2419", "OTU 2859", "OTU 943", "OTU 2722", "OTU 1167", "OTU 2651", "OTU 1314"];
        z = ["Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"]
    }
    
    Plotly.restyle("bubble", "x", [x]);
    Plotly.restyle("bubble", "y", [y]);
    Plotly.restyle("bubble", "text", [z]);
    Plotly.restyle("bubble", "marker.size", [x]);
    Plotly.restyle("bubble", "marker.color", [x]);
}


import { useSearchParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import Calculator from './Calculator';
import '../../src/App.css';
import toast, { Toaster } from 'react-hot-toast';


const Yrkesfag2 = () => {
  const [queryParameters] = useSearchParams()
  const linjeId = queryParameters.get("linjeId")

  const yrkesfag_data = {
    0: {
      name: "Bygg- og anleggsteknikk",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Arbeidsmiljø og dokumentasjon", ukeTimer: 5 }, 1: { name: "Praktisk yrkesutøvelse", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Anleggsgartnerarbeid', 'ukeTimer': 11 }, 4: { 'name': 'Rammebetingelser for anleggsgartnerarbeid', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Anleggsgartner', 'fag': 6 },
        5: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Drift og vedlikehold', 'ukeTimer': 5 }, 4: { 'name': 'Grunnarbeider', 'ukeTimer': 7 }, 5: { 'name': 'Sikkerhetsopplæring for masseforflytningsmaskiner', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Anleggsteknikk', 'fag': 7 },
        6: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Betong og mur', 'ukeTimer': 11 }, 4: { 'name': 'Dokumentasjon og kommunikasjon', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Betong og mur', 'fag': 6 },
        7: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Arbeidsmiljø og dokumentasjon', 'ukeTimer': 5 }, 4: { 'name': 'Praktisk yrkesutøvelse', 'ukeTimer': 11 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Klima, energi og miljøteknikk', 'fag': 6 },
        8: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Forbehandling og påføring', 'ukeTimer': 11 }, 4: { 'name': 'Helse, miljø og sikkerhet', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Overflateteknikk', 'fag': 6 }, 7: { "0": { "name": "Gym", "ukeTimer": 2 }, "1": { "name": "Norsk", "ukeTimer": 4 }, "2": { "name": "Samfunnskunnskap", "ukeTimer": 3 }, "3": { "name": "Bransjel\u00e6re", "ukeTimer": 5 }, "4": { "name": "Sanit\u00e6rteknikk", "ukeTimer": 7 }, "5": { "name": "Varmeteknikk", "ukeTimer": 5 }, "6": { "name": "YFF", "ukeTimer": 9 }, "name": "VG2 - R\u00f8rlegger", "fag": 7 },
        9: { 0: { "name": "Gym", "ukeTimer": 2 }, 1: { "name": "Norsk", "ukeTimer": 4 }, 2: { "name": "Samfunnskunnskap", "ukeTimer": 3 }, 3: { "name": "Bransjelære", "ukeTimer": 5 }, 4: { "name": "Sanitærteknikk", "ukeTimer": 7 }, 5: { "name": "Varmeteknikk", "ukeTimer": 5 }, 6: { "name": "YFF", "ukeTimer": 9 }, "name": "VG2 - Rørlegger", "fag": 7 },
        10: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Arbeidsplanlegging og tegning', 'ukeTimer': 5 }, 4: { 'name': 'Materialkunnskap', 'ukeTimer': 5 }, 5: { 'name': 'Produksjon', 'ukeTimer': 7 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Trearbeid', 'fag': 7 },
        11: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Produksjon', 'ukeTimer': 11 }, 4: { 'name': 'Tegning og materialvalg', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Treteknikk', 'fag': 6 },
        12: {0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Konstruksjoner og klimaskall', 'ukeTimer': 7 }, 4: { 'name': 'Materialegenskaper, varmeisolering og tetting', 'ukeTimer': 5 }, 5: { 'name': 'Vinduer, dører og innvendig arbeid', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Tømrer', 'fag': 7},
      }
    },
    1: {
      name: "Elektro og datateknologi",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Elektroniske kretser og nettverk", ukeTimer: 7 }, 1: { name: "Energi- og styresystemer", ukeTimer: 10.5 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Planlegging og kommunikasjon', 'ukeTimer': 5 }, 4: { 'name': 'Reparasjon og vedlikehold', 'ukeTimer': 11 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Arbeidsmaskiner', 'fag': 6 },
        5: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Automatiseringssystemer', 'ukeTimer': 11 }, 4: { 'name': 'Elenergisystemer', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Automatisering', 'fag': 6 },
        6: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Boring', 'ukeTimer': 7 }, 4: { 'name': 'Komplettering og brønnservice', 'ukeTimer': 5 }, 5: { 'name': 'Prosedyrer og praksis', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Brønnteknikk', 'fag': 7 },
        7: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Data- og informasjonsteknologi', 'ukeTimer': 7 }, 4: { 'name': 'Elektroniske kretser og utstyr', 'ukeTimer': 9 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Datateknologi og elektronikk', 'fag': 6 },
        8: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Nyttelast, sensorer og bearbeiding av data', 'ukeTimer': 6 }, 4: { 'name': 'Operasjon og sikkerhet', 'ukeTimer': 10 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Drone', 'fag': 6 },
        9: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Elektronisk kommunikasjon', 'ukeTimer': 5 }, 4: { 'name': 'Elenergi og styresystemer', 'ukeTimer': 11 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Elenergi og ekom', 'fag': 6 },
        10: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Elektrofag', 'ukeTimer': 7 }, 4: { 'name': 'Luftfartøylære', 'ukeTimer': 5 }, 5: { 'name': 'Material- og komponentlære', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Flyfag', 'fag': 7 },
        11: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Teknologi', 'ukeTimer': 11 }, 4: { 'name': 'Vedlikehold', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Industriteknologi', 'fag': 6 },
        12: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Analyse, dokumentasjon og kvalitet', 'ukeTimer': 5 }, 4: { 'name': 'Kjemisk teknologi', 'ukeTimer': 6 }, 5: { 'name': 'Produksjon og tjenester', 'ukeTimer': 6 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Kjemiprosess- og laboratoriefag', 'fag': 7 },
        13: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Dokumentasjon og kvalitet', 'ukeTimer': 5 }, 4: { 'name': 'Verkstedarbeid', 'ukeTimer': 11 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Kjøretøy', 'fag': 6 },
        14: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Elenergi og automatisering', 'ukeTimer': 5 }, 4: { 'name': 'Kulde- og varmepumpeteknikk', 'ukeTimer': 6 }, 5: { 'name': 'Ventilasjonsteknikk', 'ukeTimer': 6 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Kulde-, varmepumpe- og ventilasjonsteknikk', 'fag': 7 },
        15: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Dokumentasjon og kvalitet', 'ukeTimer': 5 }, 4: { 'name': 'Skipstekniske tjenester', 'ukeTimer': 7 }, 5: { 'name': 'Valgfritt programfag (Dekk / Maskin)', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Maritime fag', 'fag': 7 },
        16: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Produksjon og vedlikehold', 'ukeTimer': 11 }, 4: { 'name': 'Produktutvikling', 'ukeTimer': 5 }, 5: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Urmaker', 'fag': 6 },
        17: { name: "pause", label: "VG3"},
        18: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Dokumentasjon og kontroll', 'ukeTimer': 6 }, 2: { 'name': 'Feilsøking, reparasjon og vedlikehold', 'ukeTimer': 26 }, 'name': 'VG3 - Anleggsmaskinmekanikerfaget', 'fag': 3 },
        19: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Automatiseringssystemer', 'ukeTimer': 22 }, 2: { 'name': 'Elenergisystemer', 'ukeTimer': 5 }, 3: { 'name': 'Mekanisk arbeid', 'ukeTimer': 5 }, 'name': 'VG3 - Automatiseringsfaget', 'fag': 4 },
        20: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Matematikk 2P-Y (praktisk)', 'ukeTimer': 5 }, 2: { 'name': 'Naturfag', 'ukeTimer': 3 }, 3: { 'name': 'Elektronikk og kommunikasjonsteknologi', 'ukeTimer': 5 }, 4: { 'name': 'Fjernanalyse og geografiske informasjonssystemer', 'ukeTimer': 5 }, 5: { 'name': 'Romfysikk', 'ukeTimer': 5 }, 6: { 'name': 'Romteknologi og satelitteknikk', 'ukeTimer': 5 }, 7: { 'name': 'Telemetri', 'ukeTimer': 5 }, 'name': 'VG3 - Romteknologi', 'fag': 8 },
        21: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Installering og drift', 'ukeTimer': 14 }, 2: { 'name': 'Reparasjon og vedlikehold', 'ukeTimer': 17 }, 'name': 'VG3 - Dataelektronikerfaget', 'fag': 3 },
        22: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Automasjon', 'ukeTimer': 8 }, 2: { 'name': 'Elektronisk kommunikasjon', 'ukeTimer': 6 }, 3: { 'name': 'Elenergi', 'ukeTimer': 12 }, 4: { 'name': 'Organisasjon og ledelse', 'ukeTimer': 5 }, 'name': 'VG3 - Maritim elektriker', 'fag': 5 },
        23: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Flysikkerhet', 'ukeTimer': 5 }, 2: { 'name': 'Luftfartøysystemer', 'ukeTimer': 16 }, 3: { 'name': 'Vedlikeholdsteknikk', 'ukeTimer': 10 }, 'name': 'VG3 - Flytekniske fag', 'fag': 4 },
        24: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Gym', 'ukeTimer': 2 }, 2: { 'name': 'Flysikkerhet', 'ukeTimer': 5 }, 3: { 'name': 'Luftfartøysystemer', 'ukeTimer': 16 }, 4: { 'name': 'Vedlikeholdsteknikk', 'ukeTimer': 11 }, 'name': 'VG3 - Avionikerfag', 'fag': 5 },
      }
    },
    2: {
      name: "Frisør, blomster, interiør og eksponeringsdesign",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Kommunikasjon, kunde og arbeidsliv", ukeTimer: 7 }, 1: { name: "Produktutvikling og produksjon	", ukeTimer: 10 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Produksjon og arbeidsliv', 'ukeTimer': 10}, 4: {'name': 'Produktutvikling, bransjelære og kommunikasjon', 'ukeTimer': 6}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Blomsterdekoratør', 'fag': 6},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Hår, farge og strukturendring', 'ukeTimer': 7}, 4: {'name': 'Kommunikasjon, klipp og frisyreforming', 'ukeTimer': 9}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Frisør', 'fag': 6},
        6: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design, teknologi og produksjon', 'ukeTimer': 11}, 4: {'name': 'Kunde og kommunikasjon', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Interiør og eksponeringsdesign', 'fag': 6},
        7: { name: "pause", label: "VG3"},
        8: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Bedriftskultur og markedsføring', 'ukeTimer': 9}, 2: {'name': 'Produksjon og konseptutvikling', 'ukeTimer': 23}, 'name': 'VG3 - Eksponeringsdesign', 'fag': 3},
        9: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Kunde og kommunikasjon', 'ukeTimer': 9}, 2: {'name': 'Prosess og prosjektering', 'ukeTimer': 23}, 'name': 'VG3 - Interiør', 'fag': 3},        
      }
    },
    3: {
      name: "Helse- og oppvekstfag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Yrkesliv i helse- og oppvekstfag", ukeTimer: 5 }, 1: { name: "Kommunikasjon og samhandling", ukeTimer: 5 }, 2: { name: "Helsefremmende arbeid", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
        3: { name: "pause", label: "VG2"},
        4: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Administrasjon', 'ukeTimer': 5 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i aktivitørfag', 'ukeTimer': 7 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Aktivitør', 'fag': 7 },
        5: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Ambulansemedisin', 'ukeTimer': 7 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i ambulansefag', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Ambulansefag', 'fag': 7 },
        6: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 4: { 'name': 'Pedagogisk arbeid', 'ukeTimer': 7 }, 5: { 'name': 'Yrkesliv i barne- og ungdomsarbeiderfag', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Barne- og ungdomsarbeiderfag', 'fag': 7 },
        7: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Helse, funksjon og bevegelse', 'ukeTimer': 7 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i fotterapi og ortopediteknikk', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Fotterapi og ortopediteknikk', 'fag': 7 },
        8: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Helsefremmende arbeid', 'ukeTimer': 7 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i helsearbeiderfag', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Helsearbeiderfag', 'fag': 7 },
        9: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Helse og sykdom', 'ukeTimer': 7 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i helseservicefag', 'ukeTimer': 5 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Helseservicefag', 'fag': 7 },
        10: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Norsk', 'ukeTimer': 4 }, 2: { 'name': 'Samfunnskunnskap', 'ukeTimer': 3 }, 3: { 'name': 'Helsefremmende arbeid', 'ukeTimer': 5 }, 4: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 5: { 'name': 'Yrkesliv i hudpleiefag', 'ukeTimer': 7 }, 6: { 'name': 'YFF', 'ukeTimer': 9 }, 'name': 'VG2 - Hudpleie', 'fag': 7 },
        11: { name: "pause", label: "VG3"},
        12: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Helse, funksjon og bevegelse', 'ukeTimer': 8 }, 2: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 8 }, 3: { 'name': 'Yrkesliv i fotterapifaget', 'ukeTimer': 15 }, 'name': 'VG3 - Fotterapi', 'fag': 4 },
        13: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 8 }, 2: { 'name': 'Smittevern, tannanatomi og fysiologi', 'ukeTimer': 8 }, 3: { 'name': 'Yrkesliv i tannhelsesekretærfaget', 'ukeTimer': 15 }, 'name': 'VG3 - Tannhelsesekretær', 'fag': 4 },
        14: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Helseveiledning i apotek', 'ukeTimer': 13 }, 2: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 5 }, 3: { 'name': 'Yrkesliv i apotek', 'ukeTimer': 14 }, 'name': 'VG3 - Apotekteknikk', 'fag': 4 },
        15: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Helse og sykdom', 'ukeTimer': 13 }, 2: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 6 }, 3: { 'name': 'Yrkesliv i helsesekretærfaget', 'ukeTimer': 13 }, 'name': 'VG3 - Helsesekretær', 'fag': 4 },
        16: { 0: { 'name': 'Gym', 'ukeTimer': 2 }, 1: { 'name': 'Helsefremmende arbeid', 'ukeTimer': 8 }, 2: { 'name': 'Kommunikasjon og samhandling', 'ukeTimer': 8 }, 3: { 'name': 'Yrkesliv i hudpleiefaget', 'ukeTimer': 15 }, 'name': 'VG3 - Hudpleier', 'fag': 4 },
      }
    },
    4: {
      name: "Håndverk, design og produktutvikling",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Produktutvikling og skapende prosesser", ukeTimer: 5 }, 1: { name: "Materialer og teknikker", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Materialer og konstruksjon', 'ukeTimer': 5}, 4: {'name': 'Produksjon', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Båtbygger', 'fag': 6},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Duodji og designprosesser', 'ukeTimer': 5}, 4: {'name': 'Materialkunnskap, duodjiutøvelse og kulturarv', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Duodji', 'fag': 6},
        6: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design og produktutvikling', 'ukeTimer': 5}, 4: {'name': 'Gull- og sølvsmedhåndverk', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Gull- og sølvsmedhåndverk', 'fag': 6},
        7: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design og produktutvikling', 'ukeTimer': 5}, 4: {'name': 'Smedhåndverk', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Smed', 'fag': 6},
        8: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design og produktutvikling', 'ukeTimer': 5}, 4: {'name': 'Produksjon og materialer', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Søm og tekstilhåndverk', 'fag': 6},
        9: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Arbeidsplanlegging og tegning', 'ukeTimer': 5}, 4: {'name': 'Materialkunnskap', 'ukeTimer': 5}, 5: {'name': 'Produksjon', 'ukeTimer': 7}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Trearbeid', 'fag': 7},
        10: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Produksjon og vedlikehold', 'ukeTimer': 11}, 4: {'name': 'Produktutvikling', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Urmaker', 'fag': 6},        
      }
    },
    5: {
      name: "Informasjonsteknologi og medieproduksjon",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Produksjon og historiefortelling", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og programmering", ukeTimer: 5.5 }, 2: { name: "Teknologiforståelse", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
        3: { name: "pause", label: "VG2"},
        4: { 0: { name: "Brukerstøtte", ukeTimer: 5 }, 1: { name: "Driftsstøtte", ukeTimer: 6 }, 2: { name: "Utvikling", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG2 - IT", fag: 7 },
        5: { 0: { name: "Design og visualisering", ukeTimer: 5.5 }, 1: { name: "Konseptutvikling og kommunikasjon", ukeTimer: 5.5 }, 2: { name: "Teknologi og produksjon", ukeTimer: 5.5 }, 3: { name: "YFF", ukeTimer: 9 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG2 - Medie", fag: 7 }, 
      }
    },
    6: {
      name: "Naturbruk",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Naturbasert næringsaktivitet", ukeTimer: 5 }, 1: { name: "Naturbasert produksjon og tjenesteyting", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Anlegg og teknikk', 'ukeTimer': 5}, 4: {'name': 'Biologi og miljø', 'ukeTimer': 5}, 5: {'name': 'Drift og produksjon', 'ukeTimer': 7}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Akvakultur', 'fag': 7},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Anleggsgartnerarbeid', 'ukeTimer': 11}, 4: {'name': 'Rammebetingelser for anleggsgartnerarbeid', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Anleggsgartner', 'fag': 6},
        6: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Fangst og kvalitet', 'ukeTimer': 5}, 4: {'name': 'Fartøy og redskaper', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Fiske og fangst', 'fag': 6},
        7: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Drift og entreprenørskap', 'ukeTimer': 7}, 4: {'name': 'Dyrelære og aktivitet', 'ukeTimer': 9}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Heste- og dyrefag', 'fag': 6},
        8: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Forvaltning og drift', 'ukeTimer': 6}, 4: {'name': 'Produksjon og tjenesteyting', 'ukeTimer': 10}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Landbruk og gartnernæring', 'fag': 6},
        9: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Reindriftsbasert aktivitet og produksjon', 'ukeTimer': 6}, 4: {'name': 'Reinen og dens naturmiljø', 'ukeTimer': 4}, 5: {'name': 'økonomi og ressursforvaltning', 'ukeTimer': 5}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Reindrift', 'fag': 7},
        10: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Skogsdrift og maskinlære', 'ukeTimer': 9}, 4: {'name': 'Skogskjøtsel, klima og næring', 'ukeTimer': 7}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Skogbruk', 'fag': 6},
        11: { name: "pause", label: "VG3"},
        12: {0: {'name': 'Historie', 'ukeTimer': 5}, 1: {'name': 'Gym', 'ukeTimer': 2}, 2: {'name': 'Matte', 'ukeTimer': 5}, 3: {'name': 'Naturfag', 'ukeTimer': 3}, 4: {'name': 'Norsk', 'ukeTimer': 10}, 5: {'name': 'Naturforvaltning', 'ukeTimer': 5}, 6: {'name': 'Valgfritt programfag', 'ukeTimer': 5}, 'name': 'VG3 - Naturbruk (studieforberedende)', 'fag': 7},
        13: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Gym', 'ukeTimer': 2}, 2: {'name': 'Gårdsdrift', 'ukeTimer': 6}, 3: {'name': 'Plante- og husdyrproduksjon', 'ukeTimer': 11}, 4: {'name': 'Utmark og kulturlandskap', 'ukeTimer': 5}, 5: {'name': 'Valgfritt programfag 1', 'ukeTimer': 5}, 6: {'name': 'Valgfritt programfag 2', 'ukeTimer': 5}, 'name': 'VG3 - Landbruk', 'fag': 7},         
      }
    },
    7: {
      name: "Restaurant- og matfag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Bransje og arbeidsliv", ukeTimer: 5 }, 1: { name: "Råvare, produksjon og kvalitet", ukeTimer: 12 }, 2: { name: "YFF", ukeTimer: 6 }, 3: { name: "Engelsk", ukeTimer: 5 }, 4: { name: "Matte", ukeTimer: 3 }, 5: { name: "Naturfag", ukeTimer: 2 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Bransje og arbeidsliv', 'ukeTimer': 5}, 4: {'name': 'Råvare, produksjon og kvalitet', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Baker og konditor', 'fag': 6},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Bransje og arbeidsliv', 'ukeTimer': 5}, 4: {'name': 'Råvare, produksjon, salg og service', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Kokk- og servitørfag', 'fag': 6},
        6: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Bransje og arbeidsliv', 'ukeTimer': 5}, 4: {'name': 'Råvare, produksjon og kvalitet', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Matproduksjon', 'fag': 6},        
      }
    },
    8: {
      name: "Salg, service og reiseliv",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: { 0: { name: "Kultur og samhandling", ukeTimer: 5 }, 1: { name: "Forretningsdrift", ukeTimer: 6 }, 2: { name: "Markedsføring og innovasjon", ukeTimer: 6 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Norsk", ukeTimer: 4 }, 5: { name: "Samfunnsfag", ukeTimer: 3 }, 6: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 7 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Forretningsdrift', 'ukeTimer': 5}, 4: {'name': 'Innovasjon og markedsføring', 'ukeTimer': 5}, 5: {'name': 'Kultur og kommunikasjon', 'ukeTimer': 5}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Salg og reiseliv', 'fag': 7},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Administrasjon og bærekraftig drift', 'ukeTimer': 6}, 4: {'name': 'Kommunikasjon og yrkesutøvelse', 'ukeTimer': 5}, 5: {'name': 'Sikkerhet', 'ukeTimer': 6}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Service, sikkerhet og administrasjon', 'fag': 7},        
      }
    },
    9: {
      name: "Teknologi- og industrifag",
      year_data: {
        0: { name: "Velg ett årsløp..." },
        1: { name: "pause", label: "VG1"},
        2: {0: { name: "Produktivitet og kvalitetsstyring", ukeTimer: 5 }, 1: { name: "Konstruksjons- og styringsteknikk", ukeTimer: 5 }, 2: { name: "Produksjon og tjenester", ukeTimer: 7 }, 3: { name: "YFF", ukeTimer: 6 }, 4: { name: "Engelsk", ukeTimer: 5 }, 5: { name: "Matte", ukeTimer: 3 }, 6: { name: "Naturfag", ukeTimer: 2 }, 7: { name: "Gym", ukeTimer: 2 }, name: "VG1", fag: 8 },
        3: { name: "pause", label: "VG2"},
        4: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Drift og vedlikehold', 'ukeTimer': 5}, 4: {'name': 'Grunnarbeider', 'ukeTimer': 7}, 5: {'name': 'Sikkerhetsopplæring for masseforflytningsmaskiner', 'ukeTimer': 5}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Anleggsteknikk', 'fag': 7},
        5: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Planlegging og kommunikasjon', 'ukeTimer': 5}, 4: {'name': 'Reparasjon og vedlikehold', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Arbeidsmaskiner', 'fag': 6},
        6: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Automatiseringssystemer', 'ukeTimer': 11}, 4: {'name': 'Elenergisystemer', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Automatisering', 'fag': 6},
        7: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Dokumentasjon og kvalitet', 'ukeTimer': 5}, 4: {'name': 'Karosseri- og lakkteknikk', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Bilskade, lakk og karosseri', 'fag': 6},
        8: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Boring', 'ukeTimer': 7}, 4: {'name': 'Komplettering og brønnservice', 'ukeTimer': 5}, 5: {'name': 'Prosedyrer og praksis', 'ukeTimer': 5}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Brønnteknikk', 'fag': 7},
        9: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Produksjon', 'ukeTimer': 9}, 4: {'name': 'Produktutvikling og kvalitetssikring', 'ukeTimer': 7}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Børsemaker', 'fag': 6},
        10: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Materialer og konstruksjon', 'ukeTimer': 5}, 4: {'name': 'Produksjon', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Båtbygger', 'fag': 6},
        11: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Elektrofag', 'ukeTimer': 7}, 4: {'name': 'Luftfartøylære', 'ukeTimer': 5}, 5: {'name': 'Material- og komponentlære', 'ukeTimer': 5}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Flyfag', 'fag': 7},
        12: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design og produktutvikling', 'ukeTimer': 5}, 4: {'name': 'Gull- og sølvsmedhåndverk', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Gull- og sølvsmedhåndverk', 'fag': 6},
        13: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Teknologi', 'ukeTimer': 11}, 4: {'name': 'Vedlikehold', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Industriteknologi', 'fag': 6},
        14: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Analyse, dokumentasjon og kvalitet', 'ukeTimer': 5}, 4: {'name': 'Kjemisk teknologi', 'ukeTimer': 6}, 5: {'name': 'Produksjon og tjenester', 'ukeTimer': 6}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Kjemiprosess- og laboratoriefag', 'fag': 7},
        15: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Dokumentasjon og kvalitet', 'ukeTimer': 5}, 4: {'name': 'Verkstedarbeid', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Kjøretøy', 'fag': 6},
        16: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Elenergi og automatisering', 'ukeTimer': 5}, 4: {'name': 'Kulde- og varmepumpeteknikk', 'ukeTimer': 6}, 5: {'name': 'Ventilasjonsteknikk', 'ukeTimer': 6}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Kulde-, varmepumpe- og ventilasjonsteknikk', 'fag': 7},
        17: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Dokumentasjon og kvalitet', 'ukeTimer': 5}, 4: {'name': 'Skipstekniske tjenester', 'ukeTimer': 7}, 5: {'name': 'Dekk', 'ukeTimer': 5}, 6: {'name': 'Maskin', 'ukeTimer': 5}, 7: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Maritime fag', 'fag': 8},
        18: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Design og produktutvikling', 'ukeTimer': 5}, 4: {'name': 'Smedhåndverk', 'ukeTimer': 11}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Smed', 'fag': 6},
        19: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Bransjelære', 'ukeTimer': 5}, 4: {'name': 'Bransjeteknikk', 'ukeTimer': 5}, 5: {'name': 'Transport, logistikk og løfteoperasjoner', 'ukeTimer': 7}, 6: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Transport og logistikk', 'fag': 7},
        20: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Norsk', 'ukeTimer': 4}, 2: {'name': 'Samfunnskunnskap', 'ukeTimer': 3}, 3: {'name': 'Produksjon og vedlikehold', 'ukeTimer': 11}, 4: {'name': 'Produktutvikling', 'ukeTimer': 5}, 5: {'name': 'YFF', 'ukeTimer': 9}, 'name': 'VG2 - Urmaker', 'fag': 6},
        21: { name: "pause", label: "VG3"},
        22: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Dokumentasjon og kontroll', 'ukeTimer': 6}, 2: {'name': 'Feilsøking, reparasjon og vedlikehold', 'ukeTimer': 26}, 'name': 'VG3 - Anleggsmaskinmekanikerfaget', 'fag': 3},
        23: {0: {'name': 'Gym', 'ukeTimer': 2}, 1: {'name': 'Automatiseringssystemer', 'ukeTimer': 22}, 2: {'name': 'Elenergisystemer', 'ukeTimer': 5}, 3: {'name': 'Mekanisk arbeid', 'ukeTimer': 5}, 'name': 'VG3 - Automatiseringsfaget', 'fag': 4},                
      }
    },
  }


  const cookies = new Cookies();
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag/' + linjeId + '?linjeId=' + linjeId, { path: '/' });
    toast.success('"'+yrkesfag_data[parseInt(linjeId)]["name"]+'"'+' er nå lagret som din linje!', {duration:3000})
  }


  const fag_data = yrkesfag_data[parseInt(linjeId)]["year_data"]

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a id='breadcrumbsLink' href='/home' color='inherit'>Hjem</a>
        /
        <a id='breadcrumbsLink' href={'/yrkesfag/' + linjeId + '?linjeId=' + linjeId} color='text.primary'>{yrkesfag_data[parseInt(linjeId)]["name"]}</a>
      </div>

      {/*<button onClick={(setMinLinje)}>Dette er min linje!</button>*/}

      <Calculator
        fag_data={fag_data}
      />

      <Toaster />
    </div>
  );
};

export default Yrkesfag2;
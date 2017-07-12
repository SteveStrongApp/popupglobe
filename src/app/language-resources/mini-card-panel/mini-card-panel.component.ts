import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card-panel',
  templateUrl: './mini-card-panel.component.html',
  styleUrls: ['./mini-card-panel.component.css']
})
export class MiniCardPanelComponent implements OnInit {
list = [{ "id": 1, "tag_number": 1984, "language": "Thai", "functional_group": "MPLS", "level": "APPRN" },
  { "id": 2, "tag_number": 2000, "language": "Chinese", "functional_group": "McAfee", "level": "APPRN" },
  { "id": 3, "tag_number": 2008, "language": "Finnish", "functional_group": "Live Events", "level": "APPRN" },
  { "id": 4, "tag_number": 2009, "language": "Mongolian", "functional_group": "UML", "level": "APPRN" },
  { "id": 5, "tag_number": 1990, "language": "Haitian Creole", "functional_group": "Theatre", "level": "APPRN" },
  { "id": 6, "tag_number": 1998, "language": "Thai", "functional_group": "Heavy Equipment", "level": "APPRN" },
  { "id": 7, "tag_number": 2004, "language": "Zulu", "functional_group": "Uzbek", "level": "APPRN" },
  { "id": 8, "tag_number": 2005, "language": "Aymara", "functional_group": "VBA", "level": "APPRN" },
  { "id": 9, "tag_number": 1994, "language": "Fijian", "functional_group": "BCLS", "level": "APPRN" },
  { "id": 10, "tag_number": 1991, "language": "Lithuanian", "functional_group": "SDK", "level": "APPRN" },
  { "id": 11, "tag_number": 2003, "language": "Kashmiri", "functional_group": "AP Style", "level": "APPRN" },
  // { "id": 12, "tag_number": 1985, "language": "Sotho", "functional_group": "Kaseya", "level": "APPRN" },
  // { "id": 13, "tag_number": 2011, "language": "Papiamento", "functional_group": "Latin America", "level": "APPRN" },
  // { "id": 14, "tag_number": 2004, "language": "Telugu", "functional_group": "Organizational Behavior", "level": "APPRN" },
  // { "id": 15, "tag_number": 2006, "language": "Czech", "functional_group": "Xbox 360", "level": "APPRN" },
  // { "id": 16, "tag_number": 2004, "language": "Luxembourgish", "functional_group": "SAP BPM", "level": "APPRN" },
  // { "id": 17, "tag_number": 2007, "language": "Haitian Creole", "functional_group": "UCM", "level": "APPRN" },
  // { "id": 18, "tag_number": 2008, "language": "Belarusian", "functional_group": "Ozone", "level": "APPRN" },
  // { "id": 19, "tag_number": 2005, "language": "West Frisian", "functional_group": "VoIP", "level": "APPRN" },
  // { "id": 20, "tag_number": 2005, "language": "Dari", "functional_group": "APQP", "level": "APPRN" },
  // { "id": 21, "tag_number": 2001, "language": "Hungarian", "functional_group": "GIS Application", "level": "APPRN" },
  // { "id": 22, "tag_number": 2010, "language": "Azeri", "functional_group": "HDMI", "level": "APPRN" },
  // { "id": 23, "tag_number": 1984, "language": "Bulgarian", "functional_group": "JDA", "level": "APPRN" },
  // { "id": 24, "tag_number": 2007, "language": "Marathi", "functional_group": "PwC TeamMate", "level": "APPRN" },
  // { "id": 25, "tag_number": 2001, "language": "Dzongkha", "functional_group": "IBM Websphere Commerce", "level": "APPRN" },
  // { "id": 26, "tag_number": 1989, "language": "Icelandic", "functional_group": "FTK", "level": "APPRN" },
  // { "id": 27, "tag_number": 2002, "language": "Greek", "functional_group": "Sleepwear", "level": "APPRN" },
  // { "id": 28, "tag_number": 1993, "language": "Chinese", "functional_group": "Speech Writing", "level": "APPRN" },
  // { "id": 29, "tag_number": 2011, "language": "Guaraní", "functional_group": "Amazon EC2", "level": "APPRN" },
  // { "id": 30, "tag_number": 1998, "language": "Georgian", "functional_group": "OHSAS 18001", "level": "APPRN" },
  // { "id": 31, "tag_number": 2010, "language": "Hungarian", "functional_group": "Job Fairs", "level": "APPRN" },
  // { "id": 32, "tag_number": 1994, "language": "Malay", "functional_group": "NLRB", "level": "APPRN" },
  // { "id": 33, "tag_number": 1997, "language": "Thai", "functional_group": "Cvent", "level": "APPRN" },
  // { "id": 34, "tag_number": 1972, "language": "Persian", "functional_group": "IOSH", "level": "APPRN" },
  // { "id": 35, "tag_number": 1986, "language": "Bulgarian", "functional_group": "Business Objects", "level": "APPRN" },
  // { "id": 36, "tag_number": 2004, "language": "Bislama", "functional_group": "IFW", "level": "APPRN" },
  // { "id": 37, "tag_number": 1960, "language": "Swahili", "functional_group": "Knitwear", "level": "APPRN" },
  // { "id": 38, "tag_number": 1994, "language": "French", "functional_group": "PQRI", "level": "APPRN" },
  // { "id": 39, "tag_number": 2009, "language": "Northern Sotho", "functional_group": "HSI", "level": "APPRN" },
  // { "id": 40, "tag_number": 1999, "language": "Haitian Creole", "functional_group": "Allergy", "level": "APPRN" },
  // { "id": 41, "tag_number": 2011, "language": "Danish", "functional_group": "Olympic", "level": "APPRN" },
  // { "id": 42, "tag_number": 2012, "language": "Macedonian", "functional_group": "Mystery Shopping", "level": "APPRN" },
  // { "id": 43, "tag_number": 1999, "language": "Greek", "functional_group": "Economic Development", "level": "APPRN" },
  // { "id": 44, "tag_number": 1997, "language": "Maltese", "functional_group": "Microsoft DNS", "level": "APPRN" },
  // { "id": 45, "tag_number": 2001, "language": "Gagauz", "functional_group": "TMN", "level": "APPRN" },
  // { "id": 46, "tag_number": 1993, "language": "French", "functional_group": "Owners Representative", "level": "APPRN" },
  // { "id": 47, "tag_number": 1992, "language": "Sotho", "functional_group": "Dtrace", "level": "APPRN" },
  // { "id": 48, "tag_number": 1984, "language": "Somali", "functional_group": "Juvenile Law", "level": "APPRN" },
  // { "id": 49, "tag_number": 2003, "language": "Haitian Creole", "functional_group": "RTOS", "level": "APPRN" },
  { "id": 50, "tag_number": 1997, "language": "Sotho", "functional_group": "Epic Systems", "level": "APPRN" }];
  constructor() { }

  ngOnInit() {
  }

}

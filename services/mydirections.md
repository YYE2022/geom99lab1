# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJe3u5IUsvK4gR_PyyMgWDpoc&destination=place_id%3AChIJK48o16XP1IkRZ02XmwZ_4Bc&waypoints=place_id%3AChIJm8KGNas7K4gRzisvdic-RXI%7Cplace_id%3AChIJv5K-dAQtK4gRbNAx7ZGh8qU&departure_time=now&avoid=highways%7Ctolls&traffic_model=optimistic&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJe3u5IUsvK4gR_PyyMgWDpoc",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJm8KGNas7K4gRzisvdic-RXI",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJv5K-dAQtK4gRbNAx7ZGh8qU",
         "types" : [ "establishment", "food", "point_of_interest", "restaurant" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJK48o16XP1IkRZ02XmwZ_4Bc",
         "types" : [ "establishment", "park", "point_of_interest", "premise" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.843334,
               "lng" : -79.2315301
            },
            "southwest" : {
               "lat" : 43.70624,
               "lng" : -79.53577079999999
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "31.6 km",
                  "value" : 31600
               },
               "duration" : {
                  "text" : "51 mins",
                  "value" : 3085
               },
               "end_address" : "770 Don Mills Rd., North York, ON M3C 1T3, Canada",
               "end_location" : {
                  "lat" : 43.7172263,
                  "lng" : -79.3389971
               },
               "start_address" : "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6, Canada",
               "start_location" : {
                  "lat" : 43.8397931,
                  "lng" : -79.5350741
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 70
                     },
                     "end_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "umqjGdemdNqDd@q@Jc@Jc@D_CZWBWBC@ABCD"
                     },
                     "start_location" : {
                        "lat" : 43.8397931,
                        "lng" : -79.5350741
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "55 m",
                        "value" : 55
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 43.8427032,
                        "lng" : -79.53577079999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eJane St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 55\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "{|qjGxhmdNa@D_@FYBCD"
                     },
                     "start_location" : {
                        "lat" : 43.8422192,
                        "lng" : -79.5356491
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "51 m",
                        "value" : 51
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.8427632,
                        "lng" : -79.5352104
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eJane St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 55\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{_rjGpimdNQQBS@S?u@"
                     },
                     "start_location" : {
                        "lat" : 43.8427032,
                        "lng" : -79.53577079999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1331
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 146
                     },
                     "end_location" : {
                        "lat" : 43.8309299,
                        "lng" : -79.5328427
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eJane St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 55\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g`rjG`fmdNvASrAQ^EbC[jC_@|Ca@xASlBUVHPEjAOh@I`Fm@jD[pAQz@Kh@Gf@GxBYt@K`AKTCdAOpBW`BUDAR?PAf@GfAMn@I"
                     },
                     "start_location" : {
                        "lat" : 43.8427632,
                        "lng" : -79.5352104
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2089
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 223
                     },
                     "end_location" : {
                        "lat" : 43.8363679,
                        "lng" : -79.5081618
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRutherford Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 73\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ivojGfwldNJCNEGi@]aBc@uBUiAAEMo@UkA[_BMq@g@aDc@gDSwAE]k@uD?Ew@iGQqA[aC[eCSoAo@yEa@mC?Cg@{CAGs@uESyAQyAEWi@wEMqAOaBAQ[eCU}AKo@OaAS_BQsAS}AE_@CYWuBSgBS_Bi@{DUoBk@_E_@qC"
                     },
                     "start_location" : {
                        "lat" : 43.8309299,
                        "lng" : -79.5328427
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2007
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 145
                     },
                     "end_location" : {
                        "lat" : 43.8185888,
                        "lng" : -79.5039453
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKeele St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 6\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ixpjG~|gdNhAMn@KREl@K|AUbAQlAUdAOB?tAQh@GREVQp@KlAQv@K|@Kv@KFApDe@r@Ib@GjAKLApAOB?nDe@rASb@Gn@GfAM^Er@Kj@IdAOr@KZElCe@hDm@jF_AzB_@n@MB?XEfAQ^IJA`De@jAQf@IZEv@OXEfAOBAhBW"
                     },
                     "start_location" : {
                        "lat" : 43.8363679,
                        "lng" : -79.5081618
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2708
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 287
                     },
                     "end_location" : {
                        "lat" : 43.8235369,
                        "lng" : -79.47230669999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLangstaff Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 72\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eimjGtbgdNWyBWqBQsAOgAUgBCOIs@[yBO_BWoBUqBq@aFS_BU_BMq@e@cES_BGOs@sFIi@EYMaAAEA]AIGi@[gCMiAIk@OoAWsBU}Ae@aDKw@COGSGi@g@uDUaBCQAYE_@?GCKGi@AI]yC[oCe@_DSuAQoACSM]CSGe@M{@CSIc@WoBM_Ae@iD]aCQmA?e@CYMmAE]]eC]{Bo@aESwAG]Im@Ga@Eg@AECc@?[@k@@e@Fc@DYH[F]Ja@FOHYRc@PWRWBEPQZY^Wx@g@"
                     },
                     "start_location" : {
                        "lat" : 43.8185888,
                        "lng" : -79.5039453
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.4 km",
                        "value" : 7372
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 521
                     },
                     "end_location" : {
                        "lat" : 43.843334,
                        "lng" : -79.386512
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 7\u003c/b\u003e (signs for \u003cb\u003eRegional Rd 7 E\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "chnjG||`dNp@c@XQG[g@oBcAkEe@kBOk@}AsGOm@kCaLSw@kByHGYqAmFe@oB_@yAw@}Cs@iCs@qCwBgIaAwDWeAWoAKc@Qy@UqAY{ASgA[mBM{@g@mEMkAa@qECe@UkDGgAWaEEm@QeC[mEGs@CYKcAUaC]cD?AS}AE]CQ]oCAGGg@e@_ECQcB}M{@cH{@{G[}BUqBg@wD?EIo@Kw@O_AMs@Mu@Mk@Me@Mg@Sk@ISM]Yo@c@}@}@uAi@q@gDgE_@g@QUW]W_@IOGMWe@Qc@Wi@[u@Si@Oe@GWK_@Me@Qu@Ic@Oo@Ms@Y}AQaAQaAG_@sAaIWcBa@oC_@mCU{Ae@oDe@eEAGWoCCUCUCUe@cFYkCEw@OoBEq@YcESiD?KSoDIkBEoAKmCKkEAYI_CCkBEeBCeC?MCkD?[A_BAwA?cB?C?_B?_AB_A?kD@aB?MAm@A_BAM?O?OASASAQAOCOEo@MmASaBk@_EU_Bi@}DIo@SyAWiBm@cEa@}Cm@}DYsBg@eDKo@Ik@s@qEIc@e@gDMsA[mB[wBs@{EIq@"
                     },
                     "start_location" : {
                        "lat" : 43.8235369,
                        "lng" : -79.47230669999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 719
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 43.8394122,
                        "lng" : -79.38107339999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCommerce Valley Dr W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ycrjGtdpcNz@QBANEPKNMNONSBEHOLW@CXw@FQ^mATw@J[HSJSJULSNQPM@ARMHEJETIb@MdA]hAYfAYlA]HCHCFEDCFEDGBGDIBKBK@G?I?I?G?IAWAQ?EAUK}ASwC"
                     },
                     "start_location" : {
                        "lat" : 43.843334,
                        "lng" : -79.386512
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.8 km",
                        "value" : 3770
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 297
                     },
                     "end_location" : {
                        "lat" : 43.8112163,
                        "lng" : -79.3608574
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLeslie St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 12\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow York Regional Rd 12\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ikqjGtbocNdAOfAOr@K~AYx@KXCj@KNALC`@GHATEBAB?^GREx@OdAQb@Id@If@I`AQ`@GfAQB?|Ce@bASLC^K\\MZODCRKJIZW\\]V[NSz@{ANc@Z}@PgAHi@Hq@H}A`@mCHo@Dc@Fe@Fe@Jg@Jg@^sALc@Rm@Ti@Vg@R]b@q@Xa@X]VWXWTQJI@AXUXQDCt@a@PGVIJE\\I@?XGP?LCb@GREzASzB[^EdBWf@Ih@InAUlAQJCt@Kz@Mp@Kn@Kn@I^E^E`@EPCJANEp@Sd@OTGVKXKZIHCFCDAPILEPIXORKLIFG@C@GXSPMPMLKLMJIVWFIJKTYJMRWPUT_@FMHOTI@?@ALY\\s@x@kBz@qBx@oBd@iAFQ?ADW~@wBL[HSJSJUHODI?AJQNSNUPUJMNOHINOFEDELI@CDCJGJIHEJGHELEJGPGPGHCNG`@MVILERIJCNGRGLELEFCHEJBB?NETGh@Qp@Sl@Sv@Wh@Q^MVIj@SjA_@h@QpAc@nAa@~@[f@Of@Q"
                     },
                     "start_location" : {
                        "lat" : 43.8394122,
                        "lng" : -79.38107339999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.8 km",
                        "value" : 3806
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 400
                     },
                     "end_location" : {
                        "lat" : 43.7800488,
                        "lng" : -79.3497776
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eDon Mills Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "c{kjGjdkcNRG~@[PGFADCDCFCVKb@Ub@Yh@c@DEHGJKLMBCNQ\\a@f@m@x@_AdAoAf@k@n@w@NQp@w@d@k@PSl@q@PSX]NQJKfCyCv@{@LQPQTS@Cl@k@VUNKHGROXSVQf@]fCaBXQLK`@WFENIVKZO^KTGRCPGTCRCF?f@CR?^@L@^B^FXF\\FfBd@b@JjAXh@PZHl@PTDTF`AThAV`@HhB`@p@PlAZbAXF@FBZHTDH@XFTDLBXBz@H^@V@n@@J?h@?Z?PAJA@?f@CdAMf@GZEJCbAQ\\GlB[TETEVERCrB[FAREF?PC\\Gr@OLAhASt@M\\ETEPE`@GRC\\G\\INELEBA`AY@?pAc@h@QbAY\\MZITGrAc@^IPENCJAHAB?D?B?H?F@D?D@J@LBXFTHl@T`@Ph@PD@NDNBF@D@L@L@@?LAB?PAPANC@AFAJCHCHEPIRK|@e@f@YVMRMv@_@ZMLENGVI`@IPEHC@?VEVCNCHAREd@GTEp@KRCNENCNEPGNGNKHERONMHIBCLOJOJOFMJSBGFMBIBIDMDMJa@Li@Li@Je@Jc@HW"
                     },
                     "start_location" : {
                        "lat" : 43.8112163,
                        "lng" : -79.3608574
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.2 km",
                        "value" : 7208
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 791
                     },
                     "end_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "ixejGb_icNTi@JUJM@ENQNSPOJKFELGHEFCDAJEVKzC_AjA_@x@WfBk@~Bu@hA]PGDABCTGPGz@W`A[ZITIl@S`A[v@Ub@KLCPEHAJCVEn@ITCNCVCt@Ep@CH?J?h@?L?b@@N?l@@\\@RB`AF|@DR@~@D`ADz@DXBR@t@BjADZ@rAFtAFlCNF@\\Bh@@J@nAFZBXBtBHl@Bl@BZ@T@f@B~@D|@D|AHD?|@Db@@r@Bf@BT?J?^?f@B\\C`AAL?FA^A`@A^AB?H?pAA@?vACP?p@A^?X?J?pA?nBA\\AfAAb@?~AAz@AfAApAA\\A`BAjBAhCCX?\\?Z?R@R@V@TBz@LbALhANRBP@VBV@P?NAN?PAPAPCLATE^GZKhA]d@O@?HCl@QPGB?LCTELEb@ID?t@MVEZGdAQ`@Gh@Kb@ENCpASfAQj@KtASDAZINChB[XI^Gp@Mz@QRC\\GHA^Gd@KdBYv@MBAx@MfCc@NEtAULCpCe@RENCbDk@`@GDAfASNCdCc@|@OnB_@JA~@Q^GHARCx@Q`AOt@Oh@ItAWjASnAUjAQjAU`AQnCe@v@OtAWPCl@Kz@Of@IDAJANEh@KdASREx@O@?dASTE`B[~AYl@Mb@IPEVGjB]HAFAXE|@MhAS`BYhASp@KdB[dASj@Kv@Op@Mh@IDAb@Il@MXEZGDAb@Ih@I`Ce@^Gd@I~@O|@OTE`BY^K`@IlAYNE@?`@MHADApDeAHCx@Yv@Yj@Sl@S`@O|@[t@UVKVI"
                     },
                     "start_location" : {
                        "lat" : 43.7800488,
                        "lng" : -79.3497776
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eSt Dennis Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kkyiGrqfcNBF@JBNBX"
                     },
                     "start_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 43.7174013,
                        "lng" : -79.33814599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}jyiGpsfcNi@XC@cBj@E?E?E?G@CBC@CDAD"
                     },
                     "start_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "72 m",
                        "value" : 72
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 43.7172263,
                        "lng" : -79.3389971
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wpyiGlvfcNABAD?F@F@FHj@BHDNL`A"
                     },
                     "start_location" : {
                        "lat" : 43.7174013,
                        "lng" : -79.33814599999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "14.8 km",
                  "value" : 14795
               },
               "duration" : {
                  "text" : "27 mins",
                  "value" : 1626
               },
               "end_address" : "6034 Yonge St, North York, ON M2M 3W5, Canada",
               "end_location" : {
                  "lat" : 43.7897667,
                  "lng" : -79.4180176
               },
               "start_address" : "770 Don Mills Rd., North York, ON M3C 1T3, Canada",
               "start_location" : {
                  "lat" : 43.7172263,
                  "lng" : -79.3389971
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "40 m",
                        "value" : 40
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.717198,
                        "lng" : -79.3386246
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uoyiGv{fcNMaABANG"
                     },
                     "start_location" : {
                        "lat" : 43.7172263,
                        "lng" : -79.3389971
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "35 m",
                        "value" : 35
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.7172963,
                        "lng" : -79.3382307
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "ooyiGjyfcNGICICGAKAKAC?C?C@G?E"
                     },
                     "start_location" : {
                        "lat" : 43.717198,
                        "lng" : -79.3386246
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 104
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cpyiG|vfcN@E@EBE@CHMbBk@BAh@Y"
                     },
                     "start_location" : {
                        "lat" : 43.7172963,
                        "lng" : -79.3382307
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}jyiGpsfcNCYCOAKCG"
                     },
                     "start_location" : {
                        "lat" : 43.7164714,
                        "lng" : -79.3376906
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.1 km",
                        "value" : 5129
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 535
                     },
                     "end_location" : {
                        "lat" : 43.7617826,
                        "lng" : -79.3471285
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eDon Mills Rd.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kkyiGrqfcNGa@qDnAmBn@}Bx@c@Nu@TE@uCj@qBd@]JUFc@JE@E?C@UBOB]FM@wBb@eBZq@Lu@Nu@Lo@LE?q@NUDKBo@JUDw@LOBYDg@H_@Fo@Nw@NkATWDc@HcBVIB}B^WDk@Lu@LUFUDSDMBYFSDm@NK@YF[HaARe@H]Fg@J_@H]FSBMBC@cBVG?i@J}AV{@NSByAXcAPk@LmAPu@NwAT}@PwATA?oCd@cARi@HkARy@NSD]DiDl@yAXUD[DoATm@L}@NqATkBZMDuDn@k@HYFa@HcAN[F_@Hu@Ly@NKBiBXcAPy@NcAPgAR{AVODcATE@iBXUDiARaBTe@Fi@H}Dp@qATKBSD[HG@_@JC@C@C@mBl@YJQDOBQBO@YBY@U@C?Q?SAi@CYEyBYYE{@KOCc@C]ASAaAAc@?Q@q@?_@A_@@[?k@@c@?M@U?c@@C?[@oA@oA@wCBoA@}CBkABC?wBBY?mBBiA@aA?[@U?cBB"
                     },
                     "start_location" : {
                        "lat" : 43.716541,
                        "lng" : -79.3373788
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 961
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 43.7606475,
                        "lng" : -79.35853299999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDuncan Mill Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cfbjGpnhcN@d@B^@LB^JbAFl@T|CDb@Dn@@H@Z?J@J?XATA`@C`@Gn@E`@E\\KlAALIt@Gn@Ed@Gl@KnAO|AEZEl@Eb@AT?V?X@R@PDVF`@F^V|AP~@Lt@RpA?@P|@@FJb@BJNf@z@pCn@vBLb@"
                     },
                     "start_location" : {
                        "lat" : 43.7617826,
                        "lng" : -79.3471285
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 498
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 55
                     },
                     "end_location" : {
                        "lat" : 43.7640124,
                        "lng" : -79.36178369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLesmill Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a_bjGxujcNo@b@a@ZkAz@{@l@a@Zi@^cAt@KHGDA@EDIDC@QJKDC@IBIBI@QBS?C@Q?[?E@E?EBGBGDEDCDCBCDEJCJ?FAFAH?F?N?V@V?p@ADABABAJADAFCFCBABEDGBE@A@A@A??@?@CJ"
                     },
                     "start_location" : {
                        "lat" : 43.7606475,
                        "lng" : -79.35853299999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 2958
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 296
                     },
                     "end_location" : {
                        "lat" : 43.7899769,
                        "lng" : -79.3679405
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLeslie St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "atbjGbjkcNc@@G?c@DE@eALQDG@[HMDQFUHg@Ve@VULIF]TUNeA|@YNONMLi@^}@l@w@`@]Pu@ZSFODSDUFE?IBWBO@_@@_@@a@?w@Am@EWA]Ai@AqBEYAOAiBC]AYCw@AM?SDE@CBGJg@@yANs@He@HiALu@JuANsALYFg@FWBC?i@FA?I@mBVsBXqANa@D]Dg@FICEAE@Q@wAPkAPw@Ja@Fk@HOLC@i@HgAN{ARw@JgDd@mAR_@DiBVcANm@FA?kANY?mBXo@HsC`@SDg@FMBYDiEl@C@[DmBXa@FM@i@JkAPmANgAN]FoANaAN"
                     },
                     "start_location" : {
                        "lat" : 43.7640124,
                        "lng" : -79.36178369999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3297
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 318
                     },
                     "end_location" : {
                        "lat" : 43.7816303,
                        "lng" : -79.40710679999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFinch Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kvgjGrplcNUD?ZA~A?^?N?B?R@NBd@@TD\\D`@DTR|AJt@b@~CBTLX`@`DHh@\\dCDTBNDZTfB@PBNHr@LhADXPpA@FDXHr@Jt@DXHp@Jp@J|@F^ThBT|A`@`DNhADRBTXlB@HNhAVjBF`@LfAHn@Hn@F^Jr@Hn@^nCNdAHn@Ht@F\\L`AJx@Fd@BLT|ALdANtAVpBt@lFJp@NpARpAV`BBNRzAFZHj@VbBFf@Fd@N|@F\\R`AJh@@BJf@FRDT?@BL@F@HFb@NhAF^Z`CN`AHn@Hl@RvAHl@DTVpBF`@f@zDVbBHp@VpBx@dGFf@F\\PxAJn@Hn@PxADZ~@hHVhB`@zCHf@PpABNJn@^rCD^"
                     },
                     "start_location" : {
                        "lat" : 43.7899769,
                        "lng" : -79.3679405
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 823
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 93
                     },
                     "end_location" : {
                        "lat" : 43.7886584,
                        "lng" : -79.4099219
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWillowdale Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ebfjGletcNo@Ri@NsA`@u@TQFA@MDQFsAb@ODG@]La@Lc@L]JWHIDWJ]JMDKFQJULwCdBe@VOJUJOHMDQFuA`@QFUFgA^m@RSBI@S@KAG?MCMCOEOEIAOCI?E?C@G?]H"
                     },
                     "start_location" : {
                        "lat" : 43.7816303,
                        "lng" : -79.40710679999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 620
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 43.7870758,
                        "lng" : -79.41732979999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCummer Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cngjG~vtcNRxAd@pDb@vCPtARxA^rC^vC?@BNT~A@JFb@L~@BPL|@Hn@NlABRBXFb@Dd@B`@"
                     },
                     "start_location" : {
                        "lat" : 43.7886584,
                        "lng" : -79.4099219
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 304
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 43.7897667,
                        "lng" : -79.4180176
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eYonge St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gdgjGhevcNiBXGBI@C@K@MBgAR_BT{@LOBy@NUDk@JOB"
                     },
                     "start_location" : {
                        "lat" : 43.7870758,
                        "lng" : -79.41732979999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "24.7 km",
                  "value" : 24669
               },
               "duration" : {
                  "text" : "45 mins",
                  "value" : 2691
               },
               "end_address" : "Scarborough Bluffs Park, Scarborough, ON M1M 3W3, Canada",
               "end_location" : {
                  "lat" : 43.70624,
                  "lng" : -79.2315571
               },
               "start_address" : "6034 Yonge St, North York, ON M2M 3W5, Canada",
               "start_location" : {
                  "lat" : 43.7897667,
                  "lng" : -79.4180176
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 304
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 43
                     },
                     "end_location" : {
                        "lat" : 43.7870758,
                        "lng" : -79.41732979999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eYonge St\u003c/b\u003e toward \u003cb\u003eConnaught Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "augjGrivcNNCj@KTEx@ONCz@M~AUfASLCJABAHAFChBY"
                     },
                     "start_location" : {
                        "lat" : 43.7897667,
                        "lng" : -79.4180176
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 620
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 88
                     },
                     "end_location" : {
                        "lat" : 43.7886584,
                        "lng" : -79.4099219
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCummer Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gdgjGhevcNCa@Ee@Gc@CYCSOmAIo@M}@CQM_AGc@AKU_BCO?A_@wC_@sCSyAQuAc@wCe@qDSyA"
                     },
                     "start_location" : {
                        "lat" : 43.7870758,
                        "lng" : -79.41732979999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 823
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 43.7816303,
                        "lng" : -79.40710679999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWillowdale Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cngjG~vtcN\\IF?BAD?H?NBH@NDNDLBLBF?J@RAHARCl@SfA_@TGPGtAa@PGLENITKNKd@WvCeBTMPKJGLE\\KVKHEVI\\Kb@M`@M\\MFANErAc@PGLE@APGt@UrAa@h@On@S"
                     },
                     "start_location" : {
                        "lat" : 43.7886584,
                        "lng" : -79.4099219
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.8 km",
                        "value" : 6834
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 731
                     },
                     "end_location" : {
                        "lat" : 43.794343,
                        "lng" : -79.32598899999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFinch Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ebfjGletcNE_@_@sCKo@COQqAIg@a@{CWiB_AiHE[QyAIo@Ko@QyAG]Gg@y@eGWqBIq@WcBg@{DGa@WqBEUIm@SwAIm@Io@OaA[aCG_@OiAGc@AIAGCM?AEUGSKg@ACKi@SaAG]O}@Ge@Gg@WcBIk@G[S{ACOWaBSqAOqAKq@u@mFWqBOuAMeAU}ACMGe@Ky@MaAG]Iu@Io@OeA_@oCIo@Ks@G_@Io@Io@MgAGa@WkBOiAAIYmBCUESOiAa@aDU}AUiBG_@K}@Kq@Iq@EYKu@Is@EYAGQqAEYMiAIs@COAQUgBE[COEU]eCIi@a@aDA]CWk@sEKy@Ie@AIEc@C[Ck@AU?MA[?G@eA?cA@]@{A?g@AYAUAa@Gy@Iu@ACIm@McAQkAYsBAGQuAM{@QsAIq@Iq@S_BKo@Ge@?CMq@[}BAI_@kCAMg@mDMeAEUGa@Gg@]gCIg@Iq@Ks@Ea@SsAOqAQwAQyAC[OmAEYE_@C_@WmB_@yCc@cDCSIi@c@qCa@mCEUEU_@yB]wBSyAWqBACW}A[iCS_BM_AUeBe@}DWwBGg@Ei@CUAIAIC[Ag@?CCo@?m@Ak@?E@q@B_A@c@B_@BY@SB[De@Fm@Fm@Hk@Hi@DUDSFYBMFYDMBMFWFUPk@Pk@FQN_@j@{ATi@d@eA`@}@JSFQZu@@A@E@E@UVq@FSHU@IDKDUFYH_@BIDYFg@D]BWBU@W@W@W@Q?M@O?E?]?c@A]Cg@?MASGe@Iw@@I?G@G?GAGMiAE]Im@Io@Ke@Ii@Ga@CSKq@Gc@Ii@COCSGa@AOQmAWeBKy@EYIm@G]AGACAAECAK]gC]uB_@sC"
                     },
                     "start_location" : {
                        "lat" : 43.7816303,
                        "lng" : -79.40710679999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2092
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 195
                     },
                     "end_location" : {
                        "lat" : 43.7765005,
                        "lng" : -79.3178369
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePharmacy Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sqhjGljdcNXQhAq@~@k@t@e@RKFEBAJEl@WnAa@`A[fC{@rAc@RGp@Ul@SZMf@QnBo@lBm@d@OXKPGd@Ov@WjA_@nAa@v@YTIlA_@`A]h@QjBm@bBk@`Bi@hDiAhC{@`@M~Ai@nBo@lBo@jBm@zCcApBo@n@Uj@Q\\MfA]FCj@SPGFC`@MFCVMZMl@]p@[R@@?@?@?HEp@]"
                     },
                     "start_location" : {
                        "lat" : 43.794343,
                        "lng" : -79.32598899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1657
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 201
                     },
                     "end_location" : {
                        "lat" : 43.781036,
                        "lng" : -79.29817919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSheppard Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cbejGnwbcNE[[_CSwAQmAKw@Im@Gc@OeAQqAk@aEMw@]gCCSCQWkBEWCUGa@AIIk@CKGc@OkAKs@EUg@yDM{@[yB]aCE[Kk@M{@CMIm@Kk@CQQiAESIm@[mBMw@Ec@OgAKs@ACSyACSO{@UaBCOo@mEKs@O}@Ig@Io@Ie@COIo@Ie@COIc@Ks@Ik@G]M_AAEGe@YsB"
                     },
                     "start_location" : {
                        "lat" : 43.7765005,
                        "lng" : -79.3178369
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.8 km",
                        "value" : 7760
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 757
                     },
                     "end_location" : {
                        "lat" : 43.7142339,
                        "lng" : -79.27116669999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBirchmount Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o~ejGr|~bNv@c@PK@A@ADQJENIFCTMNGJERIFCHCLE\\MVI^KlBo@~@[jA_@`A[x@WvBq@bA]h@QrAc@tAc@ZKpBo@`@MRGNG`A[`A[PG\\Kv@WJB@?@?PGDAZK@?`@MBA\\Mb@Mp@UBAZING@??ADMNGvAc@dA]p@Sn@UpAc@^Kb@MRITGv@WXKZKdA]TItAe@`AYt@U`A]t@Ub@Ob@Ox@W`A[bA[JEFADANEJCF?DAFAF?B?D?BAF?H@R?@?D@D?F@D@H@LBh@LF@JBF@D?LBNBN?L?RAB?F?F?HCFAPCLCHC\\I^K\\KJCNEHCPEf@Q^Md@M~@Yf@QpAa@d@ObBg@rAc@DA@?LERGHCr@UdA]JCd@Ob@SJAl@QXGLERGf@Of@QLENEv@UdDcAl@S~Bs@v@W^MtAa@|@Y~@YPGdDcALEp@UtAa@TINErAa@TGnAa@z@WlBm@f@Ob@Of@Oj@QLC^M\\KZK\\Kp@ULC`AYPG\\KVI`A[l@QNEVENIzAc@\\Ij@QjA]`Cs@tAa@l@QNMd@Kb@ONCn@QnBo@tGoB\\M~Ac@z@WbBg@lBo@`AYpBm@xAc@VKr@SPE@AFAt@U|Ae@xDkALE|@WJEv@UfCw@`Bg@t@SJEt@Ul@QFCd@OHAHCf@OhA]XIx@YbAYp@UlA]xAc@`@MPE`@I`Cc@\\GbAM@?\\GDATCNCDALELEBAnFeBPGj@QNGvAg@`@MpAa@`Bk@`@M^M\\KJE`@Ml@Sj@Ql@Sl@SnBo@vBu@RG@?h@QXKPGTIBAf@OvAe@dDgAjA_@VK|Ag@|Ai@rAa@lBo@jEwAt@Uj@SdBk@p@ShEwATK~@a@PIlAc@^M"
                     },
                     "start_location" : {
                        "lat" : 43.781036,
                        "lng" : -79.29817919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2513
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 278
                     },
                     "end_location" : {
                        "lat" : 43.7208338,
                        "lng" : -79.24144059999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSt Clair Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}|xiGxsybNRKWaBGc@CQCIM{@AEACACGGEWk@yDCOs@cE?EQaAES]uBMu@Km@Ga@QcAKm@M_AACSwA]aCOiAOaAQuAEU@a@OeAIo@EU[wBWsBIi@Ge@EQMkAU_BIi@Gg@Ic@Ea@Ky@Ku@Ie@Kw@EYUeBSaBYsBEUEg@E[EWMw@K{@AAIo@S}AEWEYIm@?AIm@Ko@Ky@SsASyAWmBE_@Kw@OgAYwBc@eDMkAu@yFE]M}@c@cDSuAM}@QoAUeBKq@a@_D?EUeB_@oCa@gD"
                     },
                     "start_location" : {
                        "lat" : 43.7142339,
                        "lng" : -79.27116669999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1581
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 195
                     },
                     "end_location" : {
                        "lat" : 43.7076822,
                        "lng" : -79.23643059999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBrimley Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "efziG~ysbN`@MHCzAe@p@Ur@SDCbA[`Bg@~@YVK`@MHAJCJCr@UnAa@n@QlC{@d@OfCy@p@Ul@S\\M|@UjA_@h@QJEBAb@OZMNG`@QNGPGPG@AZKRGPETEPCHANAVA^@V@N@NDJ@JBLBPDLBF@`@Hl@LPBD@~@Rf@L\\DVFLBJ?H?J@VBN?L?TAP?JAF?FAHAHEFCFCLEJGFCFEFGDEDEBABCBCDEDGFGDIFIJQHQtAgC^s@HMDMBE@EBG@CBIBKBG"
                     },
                     "start_location" : {
                        "lat" : 43.7208338,
                        "lng" : -79.24144059999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 43.7078858,
                        "lng" : -79.2352334
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eBluffers Park\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "_twiGtzrbN@E?E@G@C?G@I?I?I@E?G?G?GAM?K?GAGAEAIAIAEAECIGOCGCECGEIGI"
                     },
                     "start_location" : {
                        "lat" : 43.7076822,
                        "lng" : -79.23643059999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 367
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 43.7063464,
                        "lng" : -79.231527
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBluffers Park\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iuwiGdsrbN?ICIAIMa@?GAI?A@O?I@G?MHGDE@CBELY|AuDHSPa@P[b@w@JUTa@JQFIHGJKBEBEDE@EBGBEBM@M@K?O@Q?I@G@C"
                     },
                     "start_location" : {
                        "lat" : 43.7078858,
                        "lng" : -79.2352334
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13 m",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 43.70624,
                        "lng" : -79.2315571
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ukwiG`|qbN@??@@??@@??@@??@@?@?@?@?@?@??A@?"
                     },
                     "start_location" : {
                        "lat" : 43.7063464,
                        "lng" : -79.231527
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "umqjGdemdN_NhBgAV]HMe@@iAjDe@lMcBtViC|[{Dz@MFo@yAgHsDmU}Kax@{G}j@kC}RzDk@lMmBnE{@nH_AjOiB~c@cH|MuBnEo@qAgKoDiYwDcYqEq]qMacAcCqP^iGlBwDfD}BPm@kB{HcDyMsGmXqNqj@mDwQ_Dc_@_CyXkBoOyH}m@kBkKeAmCsHmK}CcFkCcIaEkUuEk^gBkSiB_a@]kTCs^eHmj@iFq]yBuOIq@z@QRG`A}@\\q@dCiHzAoArJoCl@aAA}AMsBSwCdAOzB[xCe@bBU`AOdGeAfMsBxDyBrBoD`AaFbB{MvAoEhByCbDsCjDoAtYeEnFs@lEuAdFiDhCcDpCcFdIkRrDgDfGuBvQuFlImCbDqB|NwPlM{MhHwExDcAjER~JfCzRrEnGR|Eg@zRaDrOuDpFyAt@@hErAxANvASxFwC|IiB~Bu@~AiBbD_K~A{AzL{DvSoGlDg@hFGfXjAzSbA~R`@pp@_@tHz@jCQdLmClp@_Lnz@}Ndn@}K~SuDzTyGhBc@DZe@r@sBl@UFBxAHXL`AMaARIKSG_@?SFWrB_Ad@s@E[Ki@_H~B}E`B{HdBeC`@cNhCoRfDcg@bJu~@~Oq\\vFkQxDwDCwJy@sTP}PP}DBcBB@d@Dl@l@nHNxBS|EaBjTbBpK~ChLLb@o@b@mBvAkE~CgAp@eDl@[nEa@h@u@TeEt@}FrDkHjEeCd@}S_@sShCaT`CgJzAkPzBm\\rE_Gx@qC^U`@ArCF~AfBxLpBlOlDhXjNjeA|DdVjD`WnJvs@`AdHi@r@}Bp@wAd@}Br@yE|AeH|DcH|BqBGcB?bE`[lA~I^~CHfAqB\\g@HsFz@kCd@jCe@zGeApB]IgA_@_DmA_JcEa[tEFbH}BdH}DnLwD|Bq@h@s@aAeHqDmXeHyh@wCoQ{Gwf@aLuz@wD}YsAsLC{GWiIwB_PuEe]gF{a@wHwh@uBmQMaFZeHz@cGvGsQhBoI@{JeBcOwBqN{@}F_@sCXQhC}AhAq@dAe@lJ}CzL_ErJaDxn@sSbN}E~@c@gAaIwCcT}DmYiEqYiEsYyAaKnBuAxP{FzYcJdGkBbQcGrUqHxBApE\\zK}Cnm@cRnj@yPrdAc[zUiHtNsDrDi@vVgIdUqH~j@iRlBq@CmB]{BwB{LiFi]uDuYaLmz@oDiXcA}Hu@uFa@gD`@MdBi@dBi@jFaBnGmB~VmInCu@tCFjJdB|B@dA_@|D}FnAoDOkCe@mAMaBrG{Mf@_AJqADFH?BA"
         },
         "summary" : "Don Mills Rd",
         "warnings" : [],
         "waypoint_order" : [ 0, 1 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 

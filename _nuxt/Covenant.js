function cal() {
  if (
    (isNaN(ATK.value),
      isNaN(CRI.value),
      isNaN(AS.value),
      isNaN(WS.value),
      isNaN(FAG.value),
      isNaN(GB.value),
      isNaN(FB.value),
      isNaN(FR.value),
      isNaN(LATK.value),
      isNaN(LCRIDMG.value),
      isNaN(IAP.value),
      isNaN(SKILLLV.value),
      isNaN(FIGHTRUNE.value),
      isNaN(CRIRATE.value))
  ) {
    alert("입력칸 내에는 숫자만 입력해주세요.");
  }

  if (ATK.value == "") {
    ATK.value = "0";
  }
  if (CRI.value == "") {
    CRI.value = "0";
  }
  if (LATK.value == "") {
    LATK.value = "0";
  }
  if (LCRIDMG.value == "") {
    LCRIDMG.value = "0";
  }
  if (FIGHTRUNE.value == "") {
    FIGHTRUNE.value = "0";
  }
  if (CRIRATE.value == "") {
    CRIRATE.value = "0";
  }
  if (CRIRATE.value > 100) {
    CRIRATE.value = "100";
  }
  if (FIGHTRUNE.value < 0) {
    FIGHTRUNE.value = "0";
  }
  if (ATK.value < 0) {
    ATK.value = "0";
  }
  if (CRIRATE.value < 0) {
    CRIRATE.value = "0";
  }
  if (CRI.value < 0) {
    CRI.value = "0";
  }
  ATK.value = parseInt(ATK.value, 10);
  CRI.value = parseInt(CRI.value, 10);
  LATK.value = parseInt(LATK.value, 10);
  LCRIDMG.value = parseInt(LCRIDMG.value, 10);
  FIGHTRUNE.value = parseInt(FIGHTRUNE.value, 10);
  CRIRATE.value = parseInt(CRIRATE.value, 10);

  //카이로스던전(기댓값)
  var Cairos;
  Cairos =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(GB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 +
      ((eval(CRI.value) +
        eval(FAG.value) +
        eval(LCRIDMG.value) +
        eval(GB.value)) *
        0.01 *
        eval(CRIRATE.value) *
        0.01 +
        eval(SKILLLV.value))) *
    (1000 / 1140);
  CairosDMG.innerHTML = Math.ceil(Cairos);
  MAXCairosDMG.innerHTML = Math.ceil(Cairos * 1.03);
  MINCairosDMG.innerHTML = Math.ceil(Cairos * 0.97);
  MAXallCairosDMG.innerHTML = Math.ceil(Cairos * 1 * 1.03);
  MINallCairosDMG.innerHTML = Math.ceil(Cairos * 1 * 0.97);

  //카이로스던전(전부 치명타)
  var Cairos;
  Cairos =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(GB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 +
      ((eval(CRI.value) +
        eval(FAG.value) +
        eval(LCRIDMG.value) +
        eval(GB.value)) *
        0.01 *
        1 +
        eval(SKILLLV.value))) *
    (1000 / 1140);
  YCairosDMG.innerHTML = Math.ceil(Cairos);
  MAXYCairosDMG.innerHTML = Math.ceil(Cairos * 1.03);
  MINYCairosDMG.innerHTML = Math.ceil(Cairos * 0.97);
  MAXallYCairosDMG.innerHTML = Math.ceil(Cairos * 1 * 1.03);
  MINallYCairosDMG.innerHTML = Math.ceil(Cairos * 1 * 0.97);

  //카이로스던전 치명타X
  var NCairos;
  NCairos =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(GB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 + eval(SKILLLV.value)) *
    (1000 / 1140);

  NCairosDMG.innerHTML = Math.ceil(NCairos);
  MAXNCairosDMG.innerHTML = Math.ceil(NCairos * 1.03);
  MINNCairosDMG.innerHTML = Math.ceil(NCairos * 0.97);
  MAXallNCairosDMG.innerHTML = Math.ceil(NCairos * 1 * 1.03);
  MINallNCairosDMG.innerHTML = Math.ceil(NCairos * 1 * 0.97);

  //길드배틀(기댓값)
  var GuildBattle;
  GuildBattle =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(FB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 +
      ((eval(CRI.value) +
        eval(FAG.value) +
        eval(LCRIDMG.value) +
        eval(FR.value)) *
        0.01 *
        eval(CRIRATE.value) *
        0.01 +
        eval(SKILLLV.value))) *
    (1000 / 1140);

  GuildBattleDMG.innerHTML = Math.ceil(GuildBattle);
  MAXGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1.03);
  MINGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 0.97);
  MAXallGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1 * 1.03);
  MINallGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1 * 0.97);

  //길드배틀 전부치명타
  var GuildBattle;
  GuildBattle =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(FB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 +
      ((eval(CRI.value) +
        eval(FAG.value) +
        eval(LCRIDMG.value) +
        eval(FR.value)) *
        0.01 *
        1 +
        eval(SKILLLV.value))) *
    (1000 / 1140);
  YGuildBattleDMG.innerHTML = Math.ceil(GuildBattle);
  MAXYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1.03);
  MINYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 0.97);
  MAXallYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1 * 1.03);
  MINallYGuildBattleDMG.innerHTML = Math.ceil(GuildBattle * 1 * 0.97);

  //길드배틀 치명타X
  var NGuildBattle;
  NGuildBattle =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8 +
        eval(FB.value)) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 + eval(SKILLLV.value)) *
    (1000 / 1140);
  NGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle);
  MAXNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 1.03);
  MINNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 0.97);
  MAXallNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 1 * 1.03);
  MINallNGuildBattleDMG.innerHTML = Math.ceil(NGuildBattle * 1 * 0.97);

  // 아레나(기댓값)
  var ARENA;
  ARENA =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 +
      ((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value)) *
        0.01 *
        eval(CRIRATE.value) *
        0.01 +
        eval(SKILLLV.value))) *
    (1000 / 1140);

  ArenaDMG.innerHTML = Math.ceil(ARENA);
  MAXArenaDMG.innerHTML = Math.ceil(ARENA * 1.03);
  MINArenaDMG.innerHTML = Math.ceil(ARENA * 0.97);
  MAXallArenaDMG.innerHTML = Math.ceil(ARENA * 1 * 1.03);
  MINallArenaDMG.innerHTML = Math.ceil(ARENA * 1 * 0.97);

  //아레나(기댓값)
  var ARENA;
  ARENA =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG

    (1 +
      ((eval(CRI.value) + eval(FAG.value) + eval(LCRIDMG.value)) *
        0.01 *
        1 +
        eval(SKILLLV.value))) *
    (1000 / 1140);

  YArenaDMG.innerHTML = Math.ceil(ARENA);
  MAXYArenaDMG.innerHTML = Math.ceil(ARENA * 1.03);
  MINYArenaDMG.innerHTML = Math.ceil(ARENA * 0.97);
  MAXallYArenaDMG.innerHTML = Math.ceil(ARENA * 1 * 1.03);
  MINallYArenaDMG.innerHTML = Math.ceil(ARENA * 1 * 0.97);

  //아레나 치명타X
  var NARENA;
  NARENA =
    // BASE ATK + RUNE ATK
    (780 +
      eval(ATK.value) +
      // ARENA and READER ATK
      780 *
      ((eval(AS.value) +
        eval(WS.value) +
        eval(LATK.value) +
        eval(FIGHTRUNE.value) * 8) *
        0.01)) *
    // INCREASE ATK BUFF
    eval(IAP.value) *
    4 *
    // PLUS CIRDMG
    (1 + eval(SKILLLV.value)) *
    (1000 / 1140);
  NArenaDMG.innerHTML = Math.ceil(NARENA);
  MAXNArenaDMG.innerHTML = Math.ceil(NARENA * 1.03);
  MINNArenaDMG.innerHTML = Math.ceil(NARENA * 0.97);
  MAXallNArenaDMG.innerHTML = Math.ceil(NARENA * 1 * 1.03);
  MINallNArenaDMG.innerHTML = Math.ceil(NARENA * 1 * 0.97);
}
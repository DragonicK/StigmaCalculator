var Empty = -1;
// Índice do slot selecionado.
var SelectedSlot = Empty;
// Nome da classe selecionada.
var SelectedClass = "gladiator";
// Stigmas equipadas.
var Stigmas = [Empty, Empty, Empty, Empty, Empty, Empty, Empty];

var LastViewStigma = Empty;
var LastViewStigmaSlot = Empty;

var Gladiator = [
    'burserklance.png',
    'chargingshock.png',
    'draincut.png',
    'drainsword.png',
    'jumpattack.png',
    'movewhir.png',
    'ragespirit.png'
];

var Templar = [
    'brainstorm.png',
    'destructshield.png',
    'fortitudewave.png',
    'highprovoke.png',
    'sentinel.png',
    'skillreflector.png',
    'standingshield.png'
];

var Assassin = [
    'assaultslash.png',
    'backblow.png',
    'chainsignetburst.png',
    'clearfocus.png',
    'explosionpoison.png',
    'flashslash.png',
    'shadowdrop.png'
];

var Ranger = [
    'blazingtrap.png',
    'enchantbow.png',
    'explosionarrow.png',
    'massexplosionarrow.png',
    'painarrow.png',
    'snakebitetrap.png',
    'trackermind.png'
];

var Sorcerer = [
    'elementalsea.png',
    'fireshield.png',
    'flamestrike.png',
    'stonebarrier.png',
    'summontornado.png',
    'windcutter.png',
    'zeropoint.png'   
];

var SpiritMaster = [
    'destructimpact.png',
    'earthguardiance.png',
    'elementalcharge.png',
    'hellcurse.png',
    'hellpain.png',
    'magicalbreakdown.png',
    'manareverse.png'
];

var Chanter = [
    'blessprotect.png',
    'improvedbody.png',
    'mountaincrash.png',
    'physicalenhancement.png',
    'slowcrash.png',
    'surperiorheal.png',
    'thruststrike.png'
];

var Cleric = [
    'healershand.png',
    'healinggrace.png',
    'healingservent.png',
    'keeplife.png',
    'regeneraitionshine.png',
    'restorelife.png',
    'tranquility.png'
];

// UI

function OnStigmaMouseOver(e, icon) {
    var description = document.getElementById("description");

    if (LastViewStigma != icon) {
        CreateDescription(icon);
        LastViewStigma = icon;
    }

    description.style.top = (e.y + 32) + 'px';
    description.style.left = (e.x + 32) + 'px';
    description.style.visibility = "visible";
}

function OnEquippedMouseOver(e, slot) {
    if (Exists(slot)) {
        var description = document.getElementById("description");

        if (LastViewStigmaSlot != slot) {
            CreateDescription(Stigmas[slot]);
            LastViewStigmaSlot = slot;
        }

        description.style.top = e.y + 'px';
        description.style.left = (e.x + 32) + 'px';
        description.style.visibility = "visible";
    }
}

function OnMouseOut() {
    var element = document.getElementById("description");
    element.style.visibility = "hidden";
}

// Description

function CreateDescription(icon) {
    if (icon > Empty) {
        var stigmas = GetSelectedClassSkill();
        var html = stigmas[icon];

        var description = document.getElementById("description");
        description.innerHTML = html;
    }
}

//

function OnClassChange(name) {
    SelectedClass = name;
    SelectedSlot = Empty;
    LastViewStigma = Empty;
    LastViewStigmaSlot = Empty;

    HideClose();
    HideSlotBorder();
    Clear();
    LoadStigmas();
}

function Clear() {
    for (var i = 0; i < Stigmas.length; i++) {
        ClearStigma(i);
    }
}

function LoadStigmas() {
    var daeva = GetSelectedClass();
    var html = new Array(Stigmas.length);
    var template = '<img id="#stigma-#" class="class-stigma" src="img/skills/#source#" onclick="#OnClick#" onmouseover="#MouseOver#" onmouseout="#MouseOut#" />';

    for (var i = 0; i < Stigmas.length; ++i) {
        var link = template.replace('#stigma-#', 'stigma-' + i);
        link = link.replace('#source#', SelectedClass + "/" + daeva[i]);
        link = link.replace('#OnClick#', 'OnSelectStigma(' + i + ')');
        link = link.replace('#MouseOver#', 'OnStigmaMouseOver(event, ' + i + ')');
        link = link.replace('#MouseOut#', 'OnMouseOut()');

        html[i] = link;
    }

    var element = document.getElementById("stigma-classes");
    element.innerHTML = html.join('');
}

// Player Stigma

function OnSelectStigma(icon) {
    if (SelectedSlot > Empty) {
        EquipStigma(icon);
        SetClosePosition(SelectedSlot);
        ShowClose();
    }
}

function ClearStigma(slot) {
    Stigmas[slot] = Empty;
    RemoveIcon(slot);
}

function EquipStigma(icon) {
    Stigmas[SelectedSlot] = icon;
    ChangeIcon(icon);
}

function Exists(index) {
    return Stigmas[index] != Empty;
}

// Close 
function OnClose() {
    ClearStigma(SelectedSlot);
    HideClose();
}

function OnSelect(slot) {
    SelectedSlot = slot;

    if (Exists(slot)) {
        SetClosePosition(slot);
        ShowClose();
    } else {
        HideClose();
    }

    SetSlotBorderPosition(slot);
    ShowSlotBorder();
}

function ShowClose() {
    var close = document.getElementById("close");
    close.style.visibility = "visible";
}

function HideClose() {
    var close = document.getElementById("close");
    close.style.visibility = "hidden";
}

function SetClosePosition(index) {
    var parent = document.getElementById("stigma-slot-" + index);
    var style = window.getComputedStyle(parent);
    var close = document.getElementById("close");

    close.style.top = style.top;
    close.style.left = style.left;
}

// Border Slot

function ShowSlotBorder() {
    var border = document.getElementById("border-slot");
    border.style.visibility = "visible";
}

function HideSlotBorder() {
    var border = document.getElementById("border-slot");
    border.style.visibility = "hidden";
}

function SetSlotBorderPosition(index) {
    var parent = document.getElementById("stigma-slot-" + index);
    var style = window.getComputedStyle(parent);
    var border = document.getElementById("border-slot");

    var top = parseInt(style.top.replace('px'));
    var left = parseInt(style.left.replace('px'));

    top + 5;
    left += 5;

    border.style.top = top + 'px';
    border.style.left = left + 'px';
}

// Border Stigma

function GetSelectedClass() {
    switch (SelectedClass) {
        case "gladiator":
            return Gladiator;
        case "templar":
            return Templar;
        case "assassin":
            return Assassin;
        case "ranger":
            return Ranger;
        case "spiritmaster":
            return SpiritMaster;
        case "sorcerer":
            return Sorcerer;
        case "chanter":
            return Chanter;
        case "cleric":
            return Cleric;
    }
}

function GetSelectedClassSkill() {
    switch (SelectedClass) {
        case "gladiator":
            return GladiatorStigmas;
        case "templar":
            return TemplarStigmas;
        case "assassin":
            return AssassinStigmas;
        case "ranger":
            return RangerStigmas;
        case "spiritmaster":
            return SpiritMasterStigmas;
        case "sorcerer":
            return SorcererStigmas;
        case "chanter":
            return ChanterStigmas;
        case "cleric":
            return ClericStigmas;
    }
}

function ChangeIcon(icon) {
    var daeva = GetSelectedClass();
    var element = document.getElementById("stigma-icon-" + SelectedSlot);

    element.src = "img/skills/" + SelectedClass + "/" + daeva[icon];
    element.style.visibility = "visible";
}

function RemoveIcon(slot) {
    var icon = document.getElementById("stigma-icon-" + slot);
    icon.style.visibility = "hidden";
}
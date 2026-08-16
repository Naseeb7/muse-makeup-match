export type SkinType='dry'|'oily'|'combination'|'normal'|'sensitive';
export type Undertone='cool'|'warm'|'neutral';
export type Occasion='everyday'|'date'|'event'|'work';
export type Finish='dewy'|'natural'|'soft-matte';
export type Category='base'|'blush'|'lip'|'eye';
export type Product={id:string;name:string;category:Category;skin:SkinType[];undertone:Undertone[];occasion:Occasion[];finish:Finish[];tone:string;note:string};
export const catalog:Product[]=[
{id:'base-01',name:'Veil Skin Tint',category:'base',skin:['dry','normal','sensitive'],undertone:['cool','neutral','warm'],occasion:['everyday','date'],finish:['dewy','natural'],tone:'#c9957b',note:'Sheer, skin-like coverage with a soft glow.'},
{id:'base-02',name:'Silk Blur Foundation',category:'base',skin:['oily','combination','normal'],undertone:['warm','neutral'],occasion:['work','event','date'],finish:['natural','soft-matte'],tone:'#9b654d',note:'Balanced coverage with pore-softening control.'},
{id:'base-03',name:'Cloud Cover',category:'base',skin:['oily','combination','sensitive'],undertone:['cool','neutral'],occasion:['work','event'],finish:['soft-matte','natural'],tone:'#b57d65',note:'Weightless blur designed for longer wear.'},
{id:'blush-01',name:'Rosewater Veil',category:'blush',skin:['dry','normal','sensitive'],undertone:['cool','neutral'],occasion:['everyday','date'],finish:['dewy','natural'],tone:'#d58c8b',note:'A translucent petal flush.'},
{id:'blush-02',name:'Apricot Theory',category:'blush',skin:['normal','oily','combination'],undertone:['warm','neutral'],occasion:['everyday','event','date'],finish:['natural','soft-matte'],tone:'#d57b5d',note:'Warm apricot that wakes up the complexion.'},
{id:'blush-03',name:'Plum Hour',category:'blush',skin:['oily','combination','normal'],undertone:['cool','neutral'],occasion:['event','date'],finish:['soft-matte','natural'],tone:'#9f5865',note:'A richer flush for evening dimension.'},
{id:'lip-01',name:'Quiet Rose',category:'lip',skin:['dry','normal','sensitive'],undertone:['cool','neutral'],occasion:['everyday','work'],finish:['natural','dewy'],tone:'#a85f63',note:'Your lips, but more considered.'},
{id:'lip-02',name:'Fig Gloss',category:'lip',skin:['dry','normal'],undertone:['cool','neutral'],occasion:['date','event'],finish:['dewy'],tone:'#7e3f4b',note:'Juicy fig with a glassy finish.'},
{id:'lip-03',name:'Spiced Nude',category:'lip',skin:['oily','combination','normal'],undertone:['warm','neutral'],occasion:['everyday','work','date'],finish:['natural','soft-matte'],tone:'#a45f49',note:'A warm nude that stays effortless.'},
{id:'eye-01',name:'Mauve Smoke',category:'eye',skin:['dry','normal','sensitive','oily','combination'],undertone:['cool','neutral'],occasion:['date','event'],finish:['natural','soft-matte'],tone:'#795f67',note:'Muted mauve definition without heaviness.'},
{id:'eye-02',name:'Bronze Hour',category:'eye',skin:['dry','normal','oily','combination'],undertone:['warm','neutral'],occasion:['everyday','date','event'],finish:['natural','dewy'],tone:'#9a6c48',note:'Soft bronze dimension that catches light.'},
{id:'eye-03',name:'Cocoa Line',category:'eye',skin:['oily','combination','normal'],undertone:['warm','neutral'],occasion:['work','everyday'],finish:['soft-matte','natural'],tone:'#4f3931',note:'Clean cocoa definition for polished days.'}
];

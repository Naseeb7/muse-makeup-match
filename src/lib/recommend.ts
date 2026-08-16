import {catalog,Category,Finish,Occasion,Product,SkinType,Undertone} from '@/data/catalog';
export type Preferences={skin:SkinType;undertone:Undertone;occasion:Occasion;finish:Finish};
const weights={skin:4,undertone:3,occasion:2,finish:3};
function score(p:Product,q:Preferences){let s=0;s+=p.skin.includes(q.skin)?weights.skin:0;s+=p.undertone.includes(q.undertone)?weights.undertone:0;s+=p.occasion.includes(q.occasion)?weights.occasion:0;s+=p.finish.includes(q.finish)?weights.finish:0;return s}
export function getMatches(q:Preferences){return (['base','blush','eye','lip'] as Category[]).map(category=>{const options=catalog.filter(p=>p.category===category).map(product=>({product,score:score(product,q)})).sort((a,b)=>b.score-a.score);return options[0]});}
export function getMatchPercent(matches:{score:number}[]){const max=12*matches.length;return Math.round(matches.reduce((a,b)=>a+b.score,0)/max*100)}
export function explain(p:Product,q:Preferences){const reasons:string[]=[];if(p.skin.includes(q.skin))reasons.push(`${q.skin} skin`);if(p.undertone.includes(q.undertone))reasons.push(`${q.undertone} undertone`);if(p.occasion.includes(q.occasion))reasons.push(`${q.occasion} mood`);if(p.finish.includes(q.finish))reasons.push(`${q.finish} finish`);return reasons.length?reasons.join(' · '):'balanced fallback';}

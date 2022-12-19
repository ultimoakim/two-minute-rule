import './LvlOfImpList.css';

export default function LvlOfImpList({lvls, activeLvl, setActiveLvl}) {
    const levels = lvls.map(lvl => <li
        key={lvl}
        className={lvl === activeLvl ? 'active' : ''}
        onClick={() => setActiveLvl(lvl)}
    >
        {lvl}
    </li>
    );
    return(
        <>
            <ul className='LevelList'>
                <h3>{levels}</h3>
            </ul>
        </>
    );
}
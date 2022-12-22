import './LvlOfImpList.css';

export default function LvlOfImpList({lvls, activeLvl, setActiveLvl}) {
    const levels = lvls.map(lvl => <button
        key={lvl}
        className="button"
        onClick={() => setActiveLvl(lvl)}
        id="levelBtn"
    >
        {lvl}
    </button>
    );
    return(
            <main className='callout secondary' id="levelsImp">
                <h3>Levels of Importance (1-3)</h3>
                <h4>NOTE: As a general rule, Level 3 should contain the most important habits, while Level 1 should contain the lesser-important habits. If there are no levels below, then that means you have not added any habits yet!</h4>
                {levels[0]}
                {levels[1]}
                {levels[2]}
            </main>
    );
}

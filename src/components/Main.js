import Initial from "./Initial"
import Partners from "./Partners"
import Steps from "./Steps"
import Useful from "./Useful"
import We from "./We"
import Portfolio from "./Portfolio"
import Advantage from "./Advantage"
import Positives from "./Positives"

export default function Main (props) {

    return (
    <main className="content">
        <Initial
            openPopup={props.handlePopup}
        />
        <We/>
        <Portfolio
        title="Наши проекты"
        />
        <Advantage/>
        <Positives/>
        <Useful/>
        <Steps/>
        <Partners/>
    </main>
)
}
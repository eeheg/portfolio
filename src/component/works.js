import { Link } from "react-router-dom";

export default function Works() {
    return (
        <div className="works">
            <div className="works_top">
                <span>Works</span>
                <span>Pretium cursus gravida lorem scelerisque ultricies viverra velit dui. Sit mi risus ultricies faucibus et risus vulputate. Vulputate mauris donec consectetur augue. In tristique et pulvinar diam posuere ipsum non a vivamus.</span>
            </div>
            <Link to="/2023">
                <div className="works_bottom">
                    <img src="img/2023.png" />
                    <br/><span>2023</span>
                    <br/><span>0 projects.</span>
                </div>
            </Link>
        </div>
    )
}
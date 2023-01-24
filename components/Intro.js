import Image from "next/image";

export default function Intro() {
	return (
		<>
			<div
				style={{ marginTop: 100 + "px", height: 1024 + "px" }}
				className="container-fluid"
			>
				<div className="row h-100">
					<div className="col d-none d-sm-block"></div>
					<div className="col-7 position-relative">
						<Image
							width={244}
							height={244}
							src="/profile.png"
							alt=""
							className="position-absolute rounded-circle mt-5"
						/>
						<span className="position-absolute">
							Hello! I am Jonah Wagner
						</span>
						<span className="position-absolute">
							A Software Engineer with
						</span>
						<h2 className="position-absolute">
							a passion for learning...
						</h2>
					</div>
					<div className="col d-none d-sm-block"></div>
				</div>
			</div>
		</>
	);
}

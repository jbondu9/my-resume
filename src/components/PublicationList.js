import React from "react";
import "./PublicationList.css";

function PublicationCard(props) {
    return (
        <div className="publication__card">
            <div className="publication__info">
                {props.authors + " "}
                {props.date + "."}
            </div>
            <div className="publication__title">
                {props.title + "."}
            </div>
            <div className="publication__conference">
                {props.conference + " "}
                {props.pages + ". "}
                {props.acronym !== "" ? props.acronym + "." : ""}
            </div>
        </div>
    );
}

class PublicationList extends React.Component {
    renderList() {
        return (
            this.props.publications.map((publication, i) => {
                return (
                    <PublicationCard
                        authors={publication.authors}
                        date={publication.date}
                        title={publication.title}
                        conference={publication.conference}
                        pages={publication.pages}
                        acronym={publication.acronym}
                        key={i}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div className="publication__list">
                {this.renderList()}
            </div>
        );
    }
}

export default PublicationList;
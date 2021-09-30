import PropTypes from 'prop-types';

export const ToolHeader = ({title}) => {

return (
    <header>
        <h1>{title}</h1>
    </header>
)
};

ToolHeader.defaultProps = {
    title:'Voting App',
}

ToolHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
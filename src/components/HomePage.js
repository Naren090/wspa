import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as siteVersionActions from '../actions/siteVersionActions';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import GridRow from '../containers/gridRow';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.addSiteVersion = this.addSiteVersion.bind(this);
    this.deleteSiteVersion = this.deleteSiteVersion.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadModes();
    this.props.actions.loadVersions();
    this.props.actions.loadSiteVersions();
  }

  addSiteVersion() {
    const defaultValue = {
      versionValue: '',
      modeValue: '',
      isActive: false,
    };

    this.props.actions.addSiteVersion(defaultValue);
  }

  deleteSiteVersion(id) {
    this.props.actions.deleteSiteVersion(id);
  }

  render() {
    const gridRows = this.props.siteVersion.map((sv, i) =>
      <GridRow
        key={i}
        versions={this.props.versions}
        modes={this.props.modes}
        id={sv.id}
        versionValue={sv.versionValue}
        modeValue={sv.modeValue}
        isActive={sv.isActive}
        deleteRow={this.deleteSiteVersion} />
    );
    return (
      <div>
        <RaisedButton primary={true} label="Add Site Version" onClick={this.addSiteVersion} />
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Version</TableHeaderColumn>
              <TableHeaderColumn>Mode</TableHeaderColumn>
              <TableHeaderColumn>Activate</TableHeaderColumn>
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {gridRows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

HomePage.propTypes = {
  modes: PropTypes.array.isRequired,
  versions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  siteVersion: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  modes: state.modes,
  versions: state.versions,
  siteVersion: state.siteVersion
});
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(siteVersionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


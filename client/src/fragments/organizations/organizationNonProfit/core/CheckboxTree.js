import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdChevronRight,
    MdKeyboardArrowDown,
    MdAddBox,
    MdIndeterminateCheckBox,
    MdFolder,
    MdFolderOpen,
    MdInsertDriveFile,
} from 'react-icons/md';
import { Checkbox } from '@material-ui/core';
import { Colors } from 'utils';

class WidgetTree extends Component {
    constructor() {
        super();

        this.state = {
            checked: [],
            expanded: [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.checked !== this.state.checked) {
            this.props.handleNode(this.state.checked);
        }
    }

    componentDidMount() {
        if(this.props.selectedId !== undefined) {
            this.setState({ checked: this.props.selectedId });
        }
    }

    render() {
        const icons = {
            check: <MdCheckBox className="rct-icon-rct-icon-check" />,
            uncheck: <MdCheckBoxOutlineBlank className="rct-icon-rct-icon-uncheck" />,
            halfCheck: <MdIndeterminateCheckBox className="rct-icon-rct-icon-half-check" />,
            expandClose: <MdChevronRight className="rct-icon-rct-icon-expand-close" />,
            expandOpen: <MdKeyboardArrowDown className="rct-icon-rct-icon-expand-open" />,
            expandAll: <MdAddBox className="rct-icon-rct-icon-expand-all" />,
            collapseAll: <MdIndeterminateCheckBox className="rct-icon-rct-icon-collapse-all" />,
            parentClose: <MdFolder className="rct-icon-rct-icon-parent-close" />,
            parentOpen: <MdFolderOpen className="rct-icon-rct-icon-parent-open" />,
            leaf: <MdInsertDriveFile className="rct-icon-rct-icon-leaf-close" />,
        };

        return (
            <div>
                <div className={this.props.classes.allItems} style={{ marginBottom: '15px' }}>
                    <Checkbox
                        style={{ color: Colors.ThemeGreen, padding: 0, marginRight: '16px' }}
                        name="available"
                        checked={this?.state?.checked?.length === 0}
                        defaultChecked={true}
                        onChange={() => this.setState({ checked: [], expanded: [] })}
                    />
                    <p>{`Select All`}</p>
                </div>
                <CheckboxTree
                    checkModel={'all'}
                    nodes={this?.props?.orgCateg}
                    checked={this.state.checked}
                    expanded={this.state.expanded}
                    onCheck={(checked) => this.setState({ checked })}
                    onExpand={(expanded) => this.setState({ expanded })}
                    icons={icons}
                />
            </div>
        );
    }
}

export default WidgetTree;

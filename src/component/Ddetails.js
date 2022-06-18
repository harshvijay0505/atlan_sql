import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Expand } from '@mui/icons-material';

export default function FileSystemNavigator() {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<Expand />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
        <TreeItem nodeId="5" label="Students">
      <TreeItem nodeId="1" label="Roll no. [int]"/>
        <TreeItem nodeId="2" label="Name [varchar(100)] " />
          <TreeItem nodeId="3" label="Class [int]" />
          <TreeItem nodeId="4" label="Marks [int]" />
        </TreeItem>
      <TreeItem nodeId="10" label="Accounts">
      <TreeItem nodeId="6" label="Order ID [int] " />
        <TreeItem nodeId="7" label="Name [varchar(100)] " />
          <TreeItem nodeId="8" label="Age [int]" />
          <TreeItem nodeId="9" label="Gender [varchar(100)]"/>

        </TreeItem>
    </TreeView>
  );
}

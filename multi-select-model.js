emos.common.factory('MultiSelectModel', [
    function() {
        function MultiSelectModel(items, options) {
            var _this = this;
            this.options = options || {};
            _this.setItems(items);
        }

        MultiSelectModel.prototype = {
            setItems: function (items) {
                if (items.data) {
                    items = items.data;
                }
                if (this.options.sort) {
                    items = _.sortBy(items, ['Name']);
                }
                this.allItems = items;
                this.selectedItems = [];
                this.unselectedItems = _.clone(items);
                this.itemsIndex = _.keyBy(this.allItems, 'Id');
            },
            select: function (item) {
                this.transferItem(this.unselectedItems, this.selectedItems, item);
            },
            unselect: function (item) {
                this.transferItem(this.selectedItems, this.unselectedItems, item);
            },
            getSelectedIds: function() {
                return _.map(this.selectedItems, 'Id');
            },
            setSelectedIds: function (selectedIds) {
                this.selectedItems.length = 0;
                this.unselectedItems.length = 0;

                for (var ai = 0; ai < this.allItems.length; ai++) {
                    this.unselectedItems.push(this.allItems[ai]);
                }

                for (var si = 0; si < selectedIds.length; si++) {
                    this.select(this.itemsIndex[selectedIds[si]]);
                }
            },
            transferItem: function (fromList, toList, item) {
                if (item && this.itemsIndex[item.Id]) {
                    toList.push(item);
                    _.remove(fromList, { Id: item.Id });
                }
            }
        };

        return MultiSelectModel;
    }
]);

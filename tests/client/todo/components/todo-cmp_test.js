/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var Observable_1 = require('rxjs/Observable');
var todo_cmp_1 = require('../../../../client/dev/todo/components/todo-cmp');
var todo_service_1 = require('../../../../client/dev/todo/services/todo-service');
var MockTodoService = (function (_super) {
    __extends(MockTodoService, _super);
    function MockTodoService() {
        _super.apply(this, arguments);
    }
    MockTodoService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([]);
        });
    };
    MockTodoService.prototype.add = function (message) {
        return new Observable_1.Observable(function (o) {
            o.next(message);
        });
    };
    MockTodoService.prototype.remove = function (id) {
        return new Observable_1.Observable(function (o) {
            o.next(id);
        });
    };
    return MockTodoService;
}(todo_service_1.TodoService));
describe('todo_component', function () {
    beforeEach(function () { return testing_1.addProviders([
        {
            provide: todo_service_1.TodoService,
            useClass: MockTodoService
        }
    ]); });
    describe('creation', function () {
        it('should create the component correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(todo_cmp_1.TodoCmp).then(function (fixture) {
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled).toBeDefined();
            });
        })));
        it('should inicialize the cmp correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(todo_cmp_1.TodoCmp).then(function (fixture) {
                var instance = fixture.debugElement.componentInstance;
                spyOn(instance, '_getAll').and.callFake(function () { });
                fixture.detectChanges();
                expect(instance._getAll).toHaveBeenCalled();
            });
        })));
        it('should call add correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(todo_cmp_1.TodoCmp).then(function (fixture) {
                fixture.detectChanges();
                var instance = fixture.debugElement.componentInstance;
                var _todoMsg = 'yo';
                instance.add(_todoMsg);
            });
        })));
        it('should call remove correctly', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(todo_cmp_1.TodoCmp).then(function (fixture) {
                fixture.detectChanges();
                var instance = fixture.debugElement.componentInstance;
                var _id = 'abc123';
                instance.remove(_id);
            });
        })));
    });
});
